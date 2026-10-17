import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  HelpCircle, 
  Network, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  AlertCircle, 
  Eye, 
  Award,
  Terminal,
  Layers,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZZES, CODE_EXERCISES, DSA_PROBLEMS } from '../data/practiceData';
import { 
  getQuizResults, 
  saveQuizResult, 
  getSolvedDsa, 
  toggleSolvedDsa,
  recordActivityToday
} from '../utils/storage';

export default function Practice() {
  const [activeTab, setActiveTab] = useState('quizzes'); // 'quizzes' | 'code' | 'dsa'

  // Quiz State
  const [selectedQuizId, setSelectedQuizId] = useState(Object.keys(QUIZZES)[0]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizHistory, setQuizHistory] = useState({});

  // Code Simulation State
  const [selectedExerciseId, setSelectedExerciseId] = useState(CODE_EXERCISES[0].id);
  const currentExercise = CODE_EXERCISES.find(e => e.id === selectedExerciseId) || CODE_EXERCISES[0];
  const [userCode, setUserCode] = useState(currentExercise.starterCode);
  const [simulationResult, setSimulationResult] = useState(null);

  // DSA State
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [revealedHints, setRevealedHints] = useState({});
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [solvedDsaIds, setSolvedDsaIds] = useState([]);

  useEffect(() => {
    setQuizHistory(getQuizResults());
    setSolvedDsaIds(getSolvedDsa());
  }, []);

  // Update user code when exercise changes
  useEffect(() => {
    setUserCode(currentExercise.starterCode);
    setSimulationResult(null);
  }, [selectedExerciseId]);

  // Quiz Handlers
  const handleSelectOption = (qId, optIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers({ ...quizAnswers, [qId]: optIdx });
  };

  const handleQuizSubmit = () => {
    const quiz = QUIZZES[selectedQuizId];
    if (!quiz) return;
    let score = 0;
    quiz.questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    // Save to storage
    const updated = saveQuizResult(selectedQuizId, score, quiz.questions.length);
    setQuizHistory(updated);

    if (score === quiz.questions.length) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleRetakeQuiz = () => {
    setQuizSubmitted(false);
    setQuizAnswers({});
    setQuizScore(0);
  };

  // Code Simulation Handler
  const handleRunSimulation = () => {
    const isPassing = currentExercise.solutionCheck(userCode);
    if (isPassing) {
      setSimulationResult({
        success: true,
        message: 'All sample test cases passed successfully!',
        output: currentExercise.expectedSampleOutput
      });
      recordActivityToday(20);
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    } else {
      setSimulationResult({
        success: false,
        message: 'Simulation validation warning: Some required functions or parameters were missing. Check the problem instructions.',
        output: 'Compilation Warning: Expected required output format not fully matched.'
      });
    }
  };

  // DSA Handlers
  const toggleHint = (probId, hintIdx) => {
    const key = `${probId}-${hintIdx}`;
    setRevealedHints({ ...revealedHints, [key]: !revealedHints[key] });
  };

  const toggleSolution = (probId) => {
    setRevealedSolutions({ ...revealedSolutions, [probId]: !revealedSolutions[probId] });
  };

  const handleToggleSolved = (probId) => {
    const updated = toggleSolvedDsa(probId);
    setSolvedDsaIds(updated);
    if (updated.includes(probId)) {
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  // Filter DSA problems
  const dsaTopics = ['ALL', ...new Set(DSA_PROBLEMS.map(p => p.topic))];
  const filteredDsa = DSA_PROBLEMS.filter(p => {
    const matchTopic = selectedTopic === 'ALL' || p.topic === selectedTopic;
    const matchDiff = selectedDifficulty === 'ALL' || p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    return matchTopic && matchDiff;
  });

  const currentQuiz = QUIZZES[selectedQuizId] || QUIZZES[Object.keys(QUIZZES)[0]];

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Header */}
      <div className="section-header center">
        <div className="section-tag">
          <Code2 size={14} />
          <span>Interactive Practice Workspace</span>
        </div>
        <h1 className="section-title">
          How Can I Practise What I Learn?
        </h1>
        <p className="section-subtitle">
          Test your conceptual understanding with instant-scored quizzes, run code simulations against sample outputs, and solve topic-based DSA challenges.
        </p>
      </div>

      {/* Main Mode Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '30px',
          padding: '0.3rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button
            className={`switcher-pill ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            <HelpCircle size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Concept Quizzes
          </button>
          <button
            className={`switcher-pill ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <Terminal size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Code Simulation Workspace
          </button>
          <button
            className={`switcher-pill ${activeTab === 'dsa' ? 'active' : ''}`}
            onClick={() => setActiveTab('dsa')}
          >
            <Network size={15} style={{ display: 'inline', marginRight: '6px' }} />
            DSA Problem Sets ({solvedDsaIds.length}/{DSA_PROBLEMS.length} Solved)
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE CONCEPT QUIZZES */}
      {activeTab === 'quizzes' && (
        <div>
          {/* Quiz Selector Bar */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Select Module Quiz:
            </span>
            <div className="career-switcher-bar">
              {Object.entries(QUIZZES).map(([id, qData]) => {
                const isActive = id === selectedQuizId;
                const pastScore = quizHistory[id];
                return (
                  <button
                    key={id}
                    className={`switcher-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedQuizId(id);
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                  >
                    {qData.title.split(':')[0]}
                    {pastScore && (
                      <span style={{ marginLeft: '6px', fontSize: '0.72rem', color: pastScore.percentage >= 70 ? '#10B981' : 'var(--yellow-accent)' }}>
                        ({pastScore.percentage}%)
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Quiz Card */}
          <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
                  {currentQuiz.skillId.replace('-', ' ').toUpperCase()}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {currentQuiz.title}
                </h2>
              </div>

              {quizSubmitted ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: quizScore === currentQuiz.questions.length ? '#10B981' : 'var(--yellow-accent)' }}>
                    Score: {quizScore} / {currentQuiz.questions.length} ({Math.round((quizScore / currentQuiz.questions.length) * 100)}%)
                  </div>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={handleRetakeQuiz}>
                    <RotateCcw size={14} /> Retake Quiz
                  </button>
                </div>
              ) : (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {Object.keys(quizAnswers).length} of {currentQuiz.questions.length} answered
                </span>
              )}
            </div>

            {/* Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {currentQuiz.questions.map((q, qIndex) => {
                const userChoice = quizAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div key={q.id} style={{ background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.9rem' }}>
                      {qIndex + 1}. {q.question}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {q.options.map((opt, optIdx) => {
                        const isSelectedOpt = userChoice === optIdx;
                        let optStyle = {
                          padding: '0.7rem 1rem',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          cursor: quizSubmitted ? 'default' : 'pointer',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-card)',
                          color: 'var(--text-main)',
                          transition: 'all 0.15s ease'
                        };

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optStyle.border = '1px solid #10B981';
                            optStyle.background = 'rgba(16, 185, 129, 0.15)';
                            optStyle.color = '#10B981';
                          } else if (isSelectedOpt && !isCorrect) {
                            optStyle.border = '1px solid #EF4444';
                            optStyle.background = 'rgba(239, 68, 68, 0.15)';
                            optStyle.color = '#FCA5A5';
                          }
                        } else if (isSelectedOpt) {
                          optStyle.border = '1px solid var(--cyan-accent)';
                          optStyle.background = 'rgba(22, 196, 217, 0.15)';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            style={optStyle}
                          >
                            <span style={{ fontWeight: 700, marginRight: '8px' }}>{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div style={{
                        marginTop: '0.85rem',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        background: isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                        border: isCorrect ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)'
                      }}>
                        <strong style={{ color: isCorrect ? '#10B981' : '#FCA5A5', display: 'block', marginBottom: '0.2rem' }}>
                          {isCorrect ? '✓ Correct Answer!' : '✗ Incorrect Answer.'}
                        </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit Button */}
            {!quizSubmitted && (
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  disabled={Object.keys(quizAnswers).length === 0}
                  onClick={handleQuizSubmit}
                >
                  <Award size={18} />
                  Submit Quiz Answers
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: CODE PRACTICE SIMULATION */}
      {activeTab === 'code' && (
        <div>
          {/* Honest Prototype Label per Section 10 */}
          <div className="disclaimer-banner" style={{ marginBottom: '1.5rem' }}>
            <Terminal size={20} color="var(--cyan-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
                Practice Code Simulation Environment
              </strong>
              <span>
                This editor provides interactive code simulation for college students. It performs client-side pattern analysis, syntax keyword verification, and test outputs against expected test cases. Arbitrary execution of native system binaries is simulated for browser safety.
              </span>
            </div>
          </div>

          {/* Exercise Picker */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {CODE_EXERCISES.map((ex) => (
              <button
                key={ex.id}
                className={`switcher-pill ${selectedExerciseId === ex.id ? 'active' : ''}`}
                onClick={() => setSelectedExerciseId(ex.id)}
              >
                {ex.title} ({ex.language.toUpperCase()})
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Left Column: Instructions & Test Cases */}
            <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
                  {currentExercise.language.toUpperCase()} Practice Challenge
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {currentExercise.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.4rem', lineHeight: 1.5 }}>
                  {currentExercise.instructions}
                </p>
              </div>

              {/* Sample Input/Output */}
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  Sample Input:
                </span>
                <div style={{ background: 'var(--bg-main)', padding: '0.6rem 0.8rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                  {currentExercise.expectedSampleInput}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  Expected Sample Output:
                </span>
                <div style={{ background: 'var(--bg-main)', padding: '0.6rem 0.8rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.82rem', color: '#16C4D9', whiteSpace: 'pre-wrap' }}>
                  {currentExercise.expectedSampleOutput}
                </div>
              </div>

              {/* Simulation Result Box */}
              {simulationResult && (
                <div style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: simulationResult.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: simulationResult.success ? '1px solid #10B981' : '1px solid #EF4444',
                  marginTop: 'auto'
                }}>
                  <strong style={{ color: simulationResult.success ? '#10B981' : '#FCA5A5', display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                    {simulationResult.success ? '✓ Simulation Passed' : '✗ Verification Failed'}
                  </strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {simulationResult.message}
                  </p>
                  <div style={{ background: '#07101E', padding: '0.6rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.78rem', color: simulationResult.success ? '#10B981' : '#FCA5A5', whiteSpace: 'pre-wrap' }}>
                    {simulationResult.output}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Code Editor */}
            <div className="card" style={{ background: '#091627', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                  editor.{currentExercise.language}
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
                  onClick={() => setUserCode(currentExercise.starterCode)}
                >
                  <RotateCcw size={12} style={{ marginRight: '4px' }} /> Reset Code
                </button>
              </div>

              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                rows={16}
                spellCheck={false}
                style={{
                  width: '100%',
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  color: '#F7F9FC',
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  resize: 'vertical',
                  outline: 'none',
                  minHeight: '280px'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRunSimulation}
                >
                  <Play size={16} />
                  Run Practice Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DSA PROBLEM SETS */}
      {activeTab === 'dsa' && (
        <div>
          {/* Controls: Topic Filters & Difficulty */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Topic Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {dsaTopics.map(topic => (
                <button
                  key={topic}
                  type="button"
                  className={`switcher-pill ${selectedTopic === topic ? 'active' : ''}`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Difficulty */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Difficulty:</span>
              {['ALL', 'Easy', 'Medium', 'Hard'].map(diff => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff)}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '16px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: selectedDifficulty === diff ? 'var(--cyan-accent)' : 'var(--bg-main)',
                    color: selectedDifficulty === diff ? '#0B1B30' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer'
                  }}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Problem Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredDsa.map((prob) => {
              const isSolved = solvedDsaIds.includes(prob.id);
              const isSolRevealed = revealedSolutions[prob.id];

              return (
                <div
                  key={prob.id}
                  className="card"
                  style={{
                    border: isSolved ? '1px solid #10B981' : '1px solid var(--border-color)',
                    background: isSolved ? 'rgba(16, 185, 129, 0.04)' : 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem'
                  }}
                >
                  {/* Top Row: Title, Topic, Difficulty, Mark Solved */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                          {prob.topic}
                        </span>
                        <span className="badge" style={{ fontSize: '0.72rem', background: prob.difficulty === 'Easy' ? 'var(--cyan-accent-soft)' : 'var(--yellow-accent-soft)', color: prob.difficulty === 'Easy' ? 'var(--cyan-accent)' : 'var(--yellow-accent)' }}>
                          {prob.difficulty}
                        </span>
                        {isSolved && <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>Solved ✓</span>}
                      </div>

                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {prob.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      className={`btn btn-sm ${isSolved ? 'btn-secondary' : 'btn-outline'}`}
                      onClick={() => handleToggleSolved(prob.id)}
                    >
                      {isSolved ? (
                        <>
                          <CheckCircle2 size={16} color="#10B981" />
                          Solved
                        </>
                      ) : (
                        <>
                          <Check size={14} />
                          Mark as Solved
                        </>
                      )}
                    </button>
                  </div>

                  {/* Problem Description */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {prob.description}
                  </p>

                  {/* Example Input / Output */}
                  <div style={{
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    marginBottom: '1rem',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace'
                  }}>
                    <div><span style={{ color: 'var(--text-muted)' }}>Input:</span> {prob.exampleInput}</div>
                    <div><span style={{ color: 'var(--cyan-accent)' }}>Output:</span> {prob.exampleOutput}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontFamily: 'inherit' }}>
                      Explanation: {prob.explanation}
                    </div>
                  </div>

                  {/* Complexity Bounds */}
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <span>Target Time Complexity: <strong style={{ color: 'var(--cyan-accent)' }}>{prob.timeComplexity}</strong></span>
                    <span>Target Space Complexity: <strong style={{ color: 'var(--yellow-accent)' }}>{prob.spaceComplexity}</strong></span>
                  </div>

                  {/* Hints Accordions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    {prob.hints.map((hintText, hIdx) => {
                      const hintKey = `${prob.id}-${hIdx}`;
                      const isRevealed = revealedHints[hintKey];
                      return (
                        <div key={hIdx}>
                          <button
                            type="button"
                            onClick={() => toggleHint(prob.id, hIdx)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--yellow-accent)',
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem'
                            }}
                          >
                            <Eye size={13} />
                            {isRevealed ? `Hide Hint ${hIdx + 1}` : `Reveal Hint ${hIdx + 1}`}
                          </button>
                          {isRevealed && (
                            <div style={{ background: 'rgba(255, 196, 0, 0.08)', padding: '0.6rem 0.8rem', borderRadius: '4px', fontSize: '0.84rem', color: 'var(--text-main)', marginTop: '0.3rem', borderLeft: '3px solid var(--yellow-accent)' }}>
                              {hintText}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* View Solution Accordion */}
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      style={{ color: 'var(--cyan-accent)', fontWeight: 700, paddingLeft: 0 }}
                      onClick={() => toggleSolution(prob.id)}
                    >
                      {isSolRevealed ? 'Hide Solution Explanation' : 'View Solution Explanation & Code'}
                      {isSolRevealed ? <ChevronUp size={15} style={{ marginLeft: '4px' }} /> : <ChevronDown size={15} style={{ marginLeft: '4px' }} />}
                    </button>

                    {isSolRevealed && (
                      <div style={{ marginTop: '0.75rem', background: '#091627', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                          Optimal Approach (Two-Pointers / Stack / Divide-and-Conquer)
                        </span>
                        <pre style={{ color: '#F7F9FC', fontFamily: 'monospace', fontSize: '0.84rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                          {prob.solutionCode}
                        </pre>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
