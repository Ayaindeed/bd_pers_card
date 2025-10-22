'use client'

import React, { useEffect, useState } from 'react'

const MatrixRain: React.FC = () => {
  const [drops, setDrops] = useState<number[]>([])

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20)
    const initialDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100))
    setDrops(initialDrops)

    const interval = setInterval(() => {
      setDrops(prev => prev.map((drop, index) => {
        if (drop > window.innerHeight && Math.random() > 0.975) {
          return 0
        }
        return drop + Math.random() * 10 + 5
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop, index) => (
        <div
          key={index}
          className="absolute text-matrix-green font-mono text-sm opacity-30"
          style={{
            left: `${index * 20}px`,
            top: `${drop}px`,
            fontSize: '14px',
            textShadow: '0 0 5px #00FF41',
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className={`${i === 0 ? 'text-white' : ''}`}>
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </div>
          ))}
        </div>
      ))}
      
      {/* Kubernetes and code snippets floating around */}
      <div className="absolute top-20 left-10 text-matrix-green/20 font-mono text-xs animate-pulse">
        kubectl get birthday
      </div>
      <div className="absolute top-1/3 right-20 text-matrix-green/20 font-mono text-xs animate-pulse">
        docker run --rm celebration:latest
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-matrix-green/20 font-mono text-xs animate-pulse">
        helm install birthday ./party-chart
      </div>
      <div className="absolute top-1/2 left-1/3 text-matrix-green/20 font-mono text-xs animate-pulse">
        namespace: celebration
      </div>
    </div>
  )
}

export default MatrixRain