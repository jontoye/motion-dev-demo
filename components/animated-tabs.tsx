'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'N.Y.' },
  { id: 'business', label: 'Business' },
  { id: 'arts', label: 'Arts' },
  { id: 'science', label: 'Science' },
]

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? '' : 'hover:text-white/60'
          } relative rounded-full px-3 py-1.5 font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
