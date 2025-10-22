'use client'

import React, { useState } from 'react'

interface AuthGateProps {
  onAuthenticated: () => void
}

const AuthGate: React.FC<AuthGateProps> = ({ onAuthenticated }) => {
  const [userInput, setUserInput] = useState('')
  const [showError, setShowError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (userInput.toLowerCase().trim() === 'aya') {
      onAuthenticated()
    } else {
      setShowError(true)
      setIsShaking(true)
      setTimeout(() => {
        setIsShaking(false)
        setShowError(false)
      }, 3000)
      setUserInput('')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute text-matrix-green font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? '01' : 'kubectl'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full mx-4">
        {/* Main Auth Card */}
        <div className={`bg-gradient-to-br from-guinness-black via-gray-900 to-black 
                        rounded-2xl p-8 border-4 border-matrix-green/30 backdrop-blur-sm
                        shadow-2xl transform transition-all duration-300 
                        ${isShaking ? 'animate-bounce' : ''}`}>
          
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-matrix-green font-serif mb-2">
              Access Required
            </h1>
            <div className="w-16 h-1 bg-matrix-green mx-auto rounded"></div>
          </div>

          {/* Sentence Completion */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-guinness-cream text-lg font-mono leading-relaxed">
                Complete the sentence to enter:
              </p>
              
              <div className="bg-black/50 rounded-lg p-4 border border-matrix-green/20">
                <p className="text-xl text-guinness-cream font-serif">
                  "All I need is a Guinness & 
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="mx-2 px-3 py-1 bg-transparent border-b-2 border-matrix-green 
                             text-matrix-green font-mono focus:outline-none focus:border-green-300
                             transition-colors duration-200 min-w-[120px]"
                    placeholder="....."
                    autoFocus
                  />
                  "
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-matrix-green text-black px-6 py-3 rounded-lg font-bold text-lg
                       hover:bg-green-400 transform hover:scale-105 transition-all duration-200
                       shadow-lg shadow-matrix-green/25"
            >
              Enter the Celebration
            </button>
          </form>

          {/* Error Message */}
          {showError && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg 
                           animate-pulse text-center">
              <p className="text-red-300 font-mono">
                🚫 The owner of this app is very upset with you!!!
              </p>
              <p className="text-red-400/70 text-sm mt-1">
                Try again... think harder! 
              </p>
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute -top-3 -left-3 text-2xl animate-spin-slow">⚡</div>
          <div className="absolute -top-3 -right-3 text-2xl animate-pulse">🔒</div>
          <div className="absolute -bottom-3 -left-3 text-2xl animate-bounce">💭</div>
          <div className="absolute -bottom-3 -right-3 text-2xl animate-pulse">✨</div>
        </div>

        {/* Hint */}
        <div className="text-center mt-6 text-guinness-cream/50 text-sm font-mono">
          <p>Hint: no i'm not giving you!</p>
        </div>
      </div>
    </div>
  )
}

export default AuthGate