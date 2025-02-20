'use client'

import React from 'react'
import * as motion from 'motion/react-client'
import NextLink from 'next/link'

const MotionLink = motion.create(NextLink)

interface LinkProps {
  href: string
  children: React.ReactNode
}
export function Link({ href, children }: LinkProps) {
  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-button-primary rounded-lg"
    >
      {children}
    </MotionLink>
  )
}
