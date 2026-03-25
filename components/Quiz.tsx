'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Where did coffee first originate?",
    options: ["Brazil", "Ethiopia", "Italy", "Turkey"],
    correct: 1,
    explanation: "Coffee originated in the highlands of Ethiopia, where legend says a goat herder named Kaldi discovered it."
  },
  {
    id: 2,
    question: "What does the word 'Cappuccino' mean?",
    options: ["Strong coffee", "Milk coffee", "Capuchin monk", "Black gold"],
    correct: 2,
    explanation: "It refers to the brown robes of the Capuchin monks — the color matches the drink's appearance."
  },
  {
    id: 3,
    question: "Which brewing method uses a plunger to press grounds?",
    options: ["Pour Over", "Espresso", "French Press", "Drip Machine"],
    correct: 2,
    explanation: "The French Press (also called cafetière) uses a plunger to separate grounds from the brewed coffee."
  },
  {
    id: 4,
    question: "What is the most expensive coffee in the world made from?",
    options: ["Rare beans from Hawaii", "Beans digested by civet cats", "Aged beans in whiskey barrels", "Blue mountain beans"],
    correct: 1,
    explanation: "Kopi Luwak is made from coffee cherries eaten and digested by the Asian palm civet."
  },
  {
    id: 5,
    question: "Which country drinks the most coffee per person?",
    options: ["United States", "Italy", "Finland", "Colombia"],
    correct: 2,
    explanation: "Finland leads the world with an average of about 12 kg of coffee beans per person per year."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="relative py-24 bg-[#f5e8d3] border-t border-[#8b5a2b]/30">
      <div className="absolute inset-0 bg-[url('/textures/old-parchment.jpg')] bg-cover opacity-30 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 border-t-2 border-b-2 border-[#4a2f1f] px-12 py-3 mb-6">
            <span className="text-[#8b5a2b]">❓</span>
            <p className="font-serif text-sm tracking-[4px] text-[#5c4633]">FINAL CHAPTER • TEST YOUR KNOWLEDGE</p>
            <span className="text-[#8b5a2b]">❓</span>
          </div>
          
          <h2 
            className="font-serif text-5xl md:text-6xl text-[#3c2a1f] tracking-tighter"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Coffee Quiz
          </h2>
          <p className="mt-3 text-[#6b553f]">How well do you know your brew?</p>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="bg-[#f9f1e1] border-2 border-[#3c2a1f] p-10 shadow-md"
            >
              {/* Progress */}
              <div className="mb-8">
                <div className="h-1 bg-[#8b5a2b]/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-1 bg-[#3c2a1f] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <p className="text-right text-xs font-serif text-[#8b5a2b] mt-1">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              <h3 className="font-serif text-2xl leading-tight text-[#3c2a1f] mb-10">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-5 border-2 font-serif text-lg transition-all
                      ${selectedAnswer === null 
                        ? 'border-[#8b5a2b]/70 hover:border-[#3c2a1f] hover:bg-[#f5e8d3] text-[#3c2a1f]' 
                        : selectedAnswer === index 
                          ? index === questions[currentQuestion].correct 
                            ? 'border-green-800 bg-green-100 text-[#3c2a1f]' 
                            : 'border-red-800 bg-red-100 text-[#3c2a1f]'
                          : index === questions[currentQuestion].correct 
                            ? 'border-green-800 bg-green-100 text-[#3c2a1f]' 
                            : 'border-[#8b5a2b]/40 text-[#3c2a1f] opacity-80'
                      }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 p-6 bg-[#f5e8d3] border-l-4 border-[#8b5a2b] text-[#4a3a2b]"
                  >
                    {questions[currentQuestion].explanation}
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={nextQuestion}
                  className="mt-10 w-full py-4 border-2 border-[#3c2a1f] font-serif text-lg tracking-wider text-[#3c2a1f] hover:bg-[#3c2a1f] hover:text-[#f5e8d3] transition-all"
                >
                  {currentQuestion === questions.length - 1 ? "See Your Results" : "Next Question →"}
                </motion.button>
              )}
            </motion.div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#f9f1e1] border-4 border-[#3c2a1f] p-12 text-center"
            >
              <div className="text-7xl mb-6">☕</div>
              
              <h3 className="font-serif text-4xl text-[#3c2a1f] mb-3">Your Coffee Journey Ends Here</h3>
              
              <div className="text-6xl font-serif my-8 text-[#3c2a1f]">
                {score} / {questions.length}
              </div>

              <p className="text-2xl font-serif text-[#6b553f] mb-10">
                {score === questions.length 
                  ? "A true coffee connoisseur! ☕" 
                  : score >= 3 
                    ? "Well brewed! You know your coffee." 
                    : "Time for another cup and a re-read."}
              </p>

              <button
                onClick={restartQuiz}
                className="px-12 py-4 border-2 border-[#3c2a1f] font-serif text-lg text-[#3c2a1f] hover:bg-[#3c2a1f] hover:text-[#f5e8d3] transition-all"
              >
                Brew Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}