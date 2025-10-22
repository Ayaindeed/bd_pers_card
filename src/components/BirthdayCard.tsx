'use client'

import React from 'react'
import Image from 'next/image'

const BirthdayCard: React.FC<{ onCardClick: () => void }> = ({ onCardClick }) => {
  return (
    <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
         onClick={onCardClick}>
      
      {/* Custom Guinness Image - BIGGER Size */}
      <div className="relative w-40 h-56 mx-auto">
        <Image
          src="/guiness.png"
          alt="Guinness Pint"
          width={160}
          height={224}
          className="object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
          priority
        />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-matrix-green/5 opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
      </div>
      
      {/* Matrix Code Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-text text-xs opacity-15 absolute top-4 left-2 animate-pulse font-mono">
          kubectl get pods<br/>namespace: celebration
        </div>
        <div className="matrix-text text-xs opacity-15 absolute bottom-4 right-2 animate-pulse font-mono">
          docker run birthday<br/>--interactive --tty
        </div>
      </div>
      
      {/* Click Instruction */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                     text-center text-guinness-cream/70 text-sm font-mono
                     group-hover:text-matrix-green transition-colors duration-300">
        <div className="animate-pulse">Click the perfect pint</div>
        <div className="text-xs mt-1 opacity-50 font-serif">{'{ authentic Irish brewing }'}</div>
      </div>
    </div>
  )
}

export default BirthdayCard