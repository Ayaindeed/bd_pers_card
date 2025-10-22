'use client'

import { useState, useEffect } from 'react'
import BirthdayCard from '@/components/BirthdayCard'
import MatrixRain from '@/components/MatrixRain'
import BirthdayPopup from '@/components/BirthdayPopup'
import AuthGate from '@/components/AuthGate'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (!isAuthenticated) {
    return <AuthGate onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <BirthdayCard onCardClick={() => setShowPopup(true)} />
      </div>

      {/* Birthday Popup */}
      {showPopup && (
        <BirthdayPopup 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)} 
        />
      )}
      
      {/* Location Reference */}
      <div className="fixed bottom-4 right-4 text-matrix-green font-mono text-xs opacity-50">
        From Fez, to Dublin, with code and love.
      </div>
    </main>
  )
}