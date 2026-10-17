import { CAREERS } from '../data/careers.js';

const WEIGHTS = {
  interest: 0.3,
  skills: 0.25,
  education: 0.2,
  goals: 0.15,
  workStyle: 0.1,
};

function clamp(n, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function textBlob(profile) {
  return [
    profile.shortTermGoal,
    profile.longTermGoal,
    profile.careerGoal,
    ...(profile.interests || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function overlapRatio(needles = [], haystacks = []) {
  if (!needles.length) return 0;
  let hits = 0;
  needles.forEach((needle) => {
    const n = String(needle).toLowerCase();
    if (
      haystacks.some((h) => {
        const v = String(h).toLowerCase();
        return v.includes(n) || n.includes(v);
      })
    ) {
      hits += 1;
    }
  });
  return hits / needles.length;
}

function scoreInterests(profile, career) {
  const interests = profile.interests || [];
  if (!interests.length) return { score: 0, missing: true };
  const ratio = overlapRatio(career.primaryInterests, interests);
  return { score: clamp(ratio * 100), missing: false };
}

function scoreSkills(profile, career) {
  const skills = profile.skills || [];
  const proficiencies = profile.skillProficiencies || {};
  const existingSkillsFound = [];

  if (!career.primarySkills?.length) {
    return { score: 0, existingSkillsFound, missing: !skills.length };
  }

  let total = 0;
  career.primarySkills.forEach((cs) => {
    const foundSkill = skills.find(
      (s) =>
        s.toLowerCase() === cs.toLowerCase() ||
        cs.toLowerCase().includes(s.toLowerCase()) ||
        s.toLowerCase().includes(cs.toLowerCase())
    );
    if (foundSkill) {
      existingSkillsFound.push(cs);
      const prof = proficiencies[foundSkill] || 'Beginner';
      if (prof === 'Advanced') total += 100;
      else if (prof === 'Intermediate') total += 70;
      else total += 40;
    }
  });

  return {
    score: clamp(total / career.primarySkills.length),
    existingSkillsFound,
    missing: skills.length === 0,
  };
}

function scoreEducation(profile, career) {
  const degree = profile.degree || '';
  const branch = profile.branch || '';
  if (!degree && !branch) return { score: 0, missing: true };

  const fullEdu = `${degree} ${branch}`.toLowerCase();
  const affinityHits = (career.degreeAffinity || []).filter(
    (da) => fullEdu.includes(da.toLowerCase()) || da.toLowerCase().includes(degree.toLowerCase())
  ).length;

  let score = 28;
  if (affinityHits > 0) score = 55 + Math.min(30, affinityHits * 12);
  else if (
    fullEdu.includes('computer') ||
    fullEdu.includes('information technology') ||
    fullEdu.includes('software')
  ) {
    score = 48;
  } else if (fullEdu.includes('science') || fullEdu.includes('engineer') || fullEdu.includes('tech')) {
    score = 38;
  }

  // A related degree helps, it does not guarantee career suitability.
  return { score: clamp(Math.min(score, 85)), missing: false };
}

function scoreGoals(profile, career) {
  const preferred = profile.preferredCareers || [];
  const blob = textBlob(profile);
  if (!preferred.length && !blob.trim()) return { score: 0, missing: true };

  let score = 18;
  if (preferred.includes(career.id)) score = 100;
  else {
    const keywords = [
      career.title.toLowerCase(),
      ...(career.primaryInterests || []).map((i) => i.toLowerCase()),
      ...(career.keyCompetencies || []).slice(0, 3).map((k) => k.toLowerCase()),
    ];
    const hits = keywords.filter((k) => k.length > 3 && blob.includes(k.split(' ')[0])).length;
    score = clamp(22 + hits * 14);
    if (blob.includes(career.title.toLowerCase().split(' ')[0])) score = Math.max(score, 72);
  }
  return { score: clamp(score), missing: false };
}

function scoreWorkStyle(profile, career) {
  const workStyle = profile.workStyle || '';
  if (!workStyle) return { score: 0, missing: true };
  if (career.preferredWorkStyles?.includes(workStyle)) return { score: 100, missing: false };
  return { score: 28, missing: false };
}

function generateMatchExplanation(profile, career, matchPercentage, existingSkillsFound, interestScore, skillScore) {
  const interests = profile.interests || [];
  const topInterest =
    interests.find((i) =>
      career.primaryInterests.some(
        (ci) => ci.toLowerCase().includes(i.toLowerCase()) || i.toLowerCase().includes(ci.toLowerCase())
      )
    ) ||
    interests[0] ||
    'technology';

  const skillText =
    existingSkillsFound.length > 0
      ? `reported strengths in ${existingSkillsFound.slice(0, 2).join(' and ')}`
      : 'limited reported skills for this path so far — interest can still be high while readiness is still forming';

  if (interestScore >= 70 && skillScore < 45) {
    return `${career.title} is a strong interest-based estimate. Your curiosity about ${topInterest} aligns well, even though current skill readiness is still early. Additional practice in ${career.keyCompetencies.slice(0, 2).join(' and ')} would raise readiness without changing your interest in the field.`;
  }

  if (matchPercentage >= 75) {
    return `${career.title} ranks highly from your answers. Interest in ${topInterest} plus ${skillText} support this estimate. Treat the percentage as a transparent ranking, not a prediction of hiring outcomes.`;
  }
  if (matchPercentage >= 50) {
    return `${career.title} is a plausible exploration path. Interest in ${topInterest} is a useful entry point. Closing gaps in ${career.keyCompetencies.slice(0, 2).join(' and ')} would improve readiness.`;
  }
  return `${career.title} currently has a lower estimated match from the answers on file. You can still explore it, but the overlap with your stated interests, skills, and goals is limited right now.`;
}

export function getProfileCompleteness(profile) {
  if (!profile) {
    return { complete: false, missingFields: ['entire profile'], provisional: true };
  }
  const missingFields = [];
  if (!profile.name?.trim()) missingFields.push('name');
  if (!profile.degree && !profile.branch) missingFields.push('education');
  if (!profile.interests?.length) missingFields.push('career interests');
  if (!profile.skills?.length) missingFields.push('existing skills');
  if (!profile.preferredCareers?.length && !profile.longTermGoal && !profile.careerGoal) {
    missingFields.push('career goals');
  }
  if (!profile.workStyle) missingFields.push('preferred work style');
  return {
    complete: missingFields.length === 0,
    missingFields,
    provisional: missingFields.length > 0,
  };
}

/**
 * Transparent rule-based career matching.
 * Each component is scored 0–100, then combined with the published weights.
 * Scores are estimates from the student's answers, not validated predictions.
 */
export function calculateCareerMatches(profile) {
  if (!profile) return [];

  const completeness = getProfileCompleteness(profile);

  const scoredCareers = CAREERS.map((career) => {
    const interest = scoreInterests(profile, career);
    const skills = scoreSkills(profile, career);
    const education = scoreEducation(profile, career);
    const goals = scoreGoals(profile, career);
    const workStyle = scoreWorkStyle(profile, career);

    const matchPercentage = clamp(
      interest.score * WEIGHTS.interest +
        skills.score * WEIGHTS.skills +
        education.score * WEIGHTS.education +
        goals.score * WEIGHTS.goals +
        workStyle.score * WEIGHTS.workStyle
    );

    const interestMatchPercent = clamp(
      interest.score * 0.55 + goals.score * 0.3 + workStyle.score * 0.15
    );
    const skillReadinessPercent = clamp(skills.score * 0.7 + education.score * 0.3);

    const missingSkills = career.primarySkills.filter((s) => !skills.existingSkillsFound.includes(s));
    const skillsToDevelop =
      missingSkills.length > 0
        ? [...missingSkills, ...career.keyCompetencies.slice(0, 2)].slice(0, 4)
        : career.keyCompetencies.slice(0, 3);

    return {
      ...career,
      matchPercentage,
      rawScore: matchPercentage,
      explanation: generateMatchExplanation(
        profile,
        career,
        matchPercentage,
        skills.existingSkillsFound,
        interest.score,
        skills.score
      ),
      relevantExistingSkills: skills.existingSkillsFound,
      skillsToDevelop,
      matchedInterestsCount: Math.round(overlapRatio(career.primaryInterests, profile.interests || []) * (career.primaryInterests?.length || 0)),
      matchedSkillsCount: skills.existingSkillsFound.length,
      interestMatchPercent,
      skillReadinessPercent,
      isProvisional: completeness.provisional,
      missingProfileFields: completeness.missingFields,
      scoreBreakdown: {
        interest: interest.score,
        skills: skills.score,
        education: education.score,
        goals: goals.score,
        workStyle: workStyle.score,
      },
    };
  });

  scoredCareers.sort((a, b) => {
    if (b.matchPercentage !== a.matchPercentage) return b.matchPercentage - a.matchPercentage;
    return b.interestMatchPercent - a.interestMatchPercent;
  });

  return scoredCareers;
}

export { WEIGHTS as MATCH_WEIGHTS };
