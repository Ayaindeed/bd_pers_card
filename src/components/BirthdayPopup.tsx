'use client'

import React, { useEffect, useState, useRef } from 'react'

interface BirthdayPopupProps {
  isOpen: boolean
  onClose: () => void
}

const BirthdayPopup: React.FC<BirthdayPopupProps> = ({ isOpen, onClose }) => {
  const [animate, setAnimate] = useState(false)
  const [isCelebrating, setIsCelebrating] = useState(false)
  const [showFarewellLetter, setShowFarewellLetter] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isOpen) {
      setAnimate(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (showFarewellLetter) {
      // Trigger letter opening animation after a short delay
      setTimeout(() => setLetterOpen(true), 300)
    }
  }, [showFarewellLetter])

  const handleCelebrate = () => {
    if (isCelebrating) return // Prevent multiple clicks
    
    setIsCelebrating(true)
    
    // Play the audio with better handling, starting at 0:14
    if (audioRef.current) {
      audioRef.current.currentTime = 14 // Start at 14 seconds
      audioRef.current.volume = 0.7 // Set volume to 70%
      
      // Try to play with user interaction
      audioRef.current.play()
        .then(() => {
          console.log('Audio started playing successfully from 0:14')
        })
        .catch(error => {
          console.log('Audio play failed:', error)
          // Fallback: try to enable audio on user interaction
          audioRef.current?.load()
        })
    }
    
    // Stop celebration after 10 seconds and show farewell letter
    setTimeout(() => {
      setIsCelebrating(false)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      // Show the farewell letter
      setShowFarewellLetter(true)
    }, 10000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
         onClick={onClose}>
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        preload="auto" 
        controls={false}
        style={{ display: 'none' }}
      >
        <source src="/song.mp4" type="audio/mpeg" />
        <source src="/song.mp4" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>

      {/* Matrix Rain Background - Full Screen */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-30">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`bg-matrix-${i}`}
            className="absolute text-matrix-green font-mono text-sm opacity-20"
            style={{
              left: `${i * 2}%`,
              top: `${Math.random() * -100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              animationName: 'matrix-fall',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          >
            {Array.from({ length: 15 }, (_, j) => (
              <div key={j} className="block leading-4" style={{ opacity: Math.max(0.1, 1 - j * 0.1) }}>
                {['01', '10', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ'][Math.floor(Math.random() * 12)]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Celebration Animations */}
      {isCelebrating && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {/* Flying Hearts */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`heart-${i}`}
              className="absolute text-red-500 text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s',
              }}
            >
              ❤️
            </div>
          ))}
          
          {/* Birthday Cakes */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`cake-${i}`}
              className="absolute text-yellow-400 text-3xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: '1.5s',
              }}
            >
              🎂
            </div>
          ))}
          
          {/* Candles */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`candle-${i}`}
              className="absolute text-orange-400 text-xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: '1s',
              }}
            >
              🕯️
            </div>
          ))}
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-matrix-green rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className={`relative bg-gradient-to-br from-guinness-black via-gray-900 to-scorpio-red 
                      rounded-2xl p-4 max-w-md mx-4 border-4 border-matrix-green/50 
                      transform transition-all duration-500 ${animate ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                      ${isCelebrating ? 'animate-pulse border-red-500/50' : ''}`}
           onClick={(e) => e.stopPropagation()}>
        
        {/* Enhanced Matrix Rain Background in Popup */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 rounded-2xl">
          {/* Falling Matrix Characters */}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`matrix-${i}`}
              className="absolute text-matrix-green font-mono text-xs opacity-30 animate-pulse"
              style={{
                left: `${i * 3.33}%`,
                top: `${Math.random() * -50}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `translateY(${Math.random() * 200}vh)`,
              }}
            >
              {Array.from({ length: 8 }, (_, j) => (
                <div key={j} className="block leading-3">
                  {['01', 'kubectl', 'docker', 'helm', '♏', '🎂'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
          ))}
          
          {/* Static Matrix Elements */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`static-${i}`}
              className="absolute text-matrix-green font-mono text-xs animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random() > 0.7 ? 'birthday/v1' : Math.random() > 0.5 ? '01' : 'kubectl'}
            </div>
          ))}
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-matrix-green hover:text-white 
                     text-2xl font-bold transition-colors duration-200"
        >
          ×
        </button>

        {/* Birthday Message */}
        <div className="text-center space-y-4 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-matrix-green font-serif">
            Lá Breithe Sona Duit 🎉
          </h1>
          
          <div className="text-sm text-guinness-cream space-y-1">
            <p>To an extraordinary human who codes,</p>
            <p>reads the matrix of knowledge,</p>
            <p>and runs through life with curiosity!</p>
          </div>

          {/* Scorpio References */}
          <div className="bg-black/30 rounded-lg p-3 text-center space-y-1">
            <p className="text-scorpio-red font-serif text-sm">
              May your Scorpio intensity illuminate every path!
            </p>
          </div>

          {/* Kubernetes Tribute */}
          <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-xs">
            <div className="text-matrix-green space-y-1">
              <div>
                <span className="text-blue-400">apiVersion:</span>
                <span className="text-yellow-300"> birthday/v1</span>
              </div>
              <div>
                <span className="text-blue-400">kind:</span>
                <span className="text-yellow-300"> Celebration</span>
              </div>
              <div>
                <span className="text-blue-400">metadata:</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">name:</span>
                <span className="text-green-300"> birthday-party</span>
              </div>
              <div>
                <span className="text-blue-400">spec:</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">replicas:</span>
                <span className="text-purple-300"> ∞</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">image:</span>
                <span className="text-green-300"> bdasb:latest</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">message:</span>
                <span className="text-green-300"> &ldquo;Another year of wisdom deployed!&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Special Message */}
          <div className="text-center text-guinness-cream/80 text-sm italic">
            &ldquo;Like a perfect pint of Guinness, you get better with time!&rdquo;
          </div>

          {/* Party Button with Audio */}
          <button 
            onClick={handleCelebrate}
            disabled={isCelebrating}
            className={`px-6 py-2 rounded-lg font-bold text-sm transform hover:scale-105 
                       transition-all duration-200 shadow-lg
                       ${isCelebrating 
                         ? 'bg-red-500 text-white shadow-red-500/25 animate-pulse' 
                         : 'bg-matrix-green text-black hover:bg-green-400 shadow-matrix-green/25'}`}
          >
            {isCelebrating ? 'Celebrating! 🎊' : "Let's Celebrate! - Click ME + Sound ON"}
          </button>
          
          <p className="text-xs text-guinness-cream/50 mt-1">
            {isCelebrating ? '*Playing celebration song...' : '*Plays celebration song'}
          </p>
          
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 text-2xl animate-spin-slow">⚡</div>
        <div className="absolute -top-2 -right-2 text-2xl animate-pulse">🌟</div>
        <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce">🎈</div>
        <div className="absolute -bottom-2 -right-2 text-2xl animate-pulse">🎁</div>
      </div>

      {/* Shakespearean Old Letter - Shows after celebration */}
      {showFarewellLetter && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 backdrop-blur-sm"
             onClick={() => setShowFarewellLetter(false)}>
          <div className="relative max-w-md mx-4"
               onClick={(e) => e.stopPropagation()}>
            
            {/* Old Parchment Letter */}
            <div className={`relative bg-gradient-to-b from-amber-50 to-yellow-100 rounded-lg shadow-2xl 
                           border-4 border-amber-800 overflow-hidden
                           transform transition-all duration-1000 
                           ${letterOpen ? 'scale-100 rotate-0' : 'scale-50 rotate-180'}
                           ${letterOpen ? 'opacity-100' : 'opacity-0'}`}
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), 
                                    radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)`,
                 }}>
              
              {/* Ornate Border */}
              <div className="absolute inset-2 border-2 border-amber-700 rounded opacity-50"></div>
              
              {/* Letter Content */}
              <div className={`p-8 text-center space-y-6 transform transition-all duration-800 delay-500
                             ${letterOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                
                {/* Decorative Header */}
                <div className="text-center">
                  <div className="text-amber-800 text-2xl mb-2">✦ ◆ ✦</div>
                  <h2 className="text-xl font-serif text-amber-900 font-bold italic tracking-widest">
                    ~ Fare Thee Well ~
                  </h2>
                  <div className="text-amber-800 text-xl mt-2">❦</div>
                </div>

                {/* Shakespearean Message */}
                <div className="space-y-4 text-amber-900 font-serif leading-relaxed">
                  <p className="text-base italic text-center">
                    <span className="text-2xl font-bold">&ldquo;</span>
                    Dearest ASE,
                    <span className="text-2xl font-bold">&rdquo;</span>
                  </p>
                  
                  <p className="text-sm leading-loose">
                    May fortune smile upon thee in the year that doth approach, and may thy 
                    endeavours prosper as the morning dew upon the rose.
                  </p>
                  
                  <p className="text-center text-base italic font-bold text-amber-800">
                    Until we meet again upon thy next birthday,
                  </p>
                </div>

                {/* Ornate Signature */}
                <div className="pt-4 border-t-2 border-amber-700">
                  <p className="text-xs text-amber-700 text-center mb-2">
                    Written with quill & ink.
                  </p>
                  <div className="text-right">
                    <p className="font-cursive text-2xl text-amber-900 mt-1 font-bold">
                      Aya
                    </p>
                    <div className="text-amber-700 text-sm mt-1">✧ ✦ ✧</div>
                  </div>
                </div>
              </div>

              {/* Wax Seal Effect */}
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-red-700 rounded-full 
                           border-2 border-red-800 shadow-lg">
                <div className="absolute inset-1 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-100 font-bold">A</span>
                </div>
              </div>
              
              {/* Aging spots */}
              <div className="absolute top-6 right-8 w-2 h-2 bg-amber-700 rounded-full opacity-20"></div>
              <div className="absolute bottom-12 right-6 w-1 h-1 bg-amber-800 rounded-full opacity-30"></div>
              <div className="absolute top-12 left-6 w-1.5 h-1.5 bg-amber-600 rounded-full opacity-15"></div>
            </div>

            {/* Close instruction */}
            <p className="text-center text-white/50 text-xs mt-4 font-serif italic">
              Touch anywhere to close this missive
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BirthdayPopup