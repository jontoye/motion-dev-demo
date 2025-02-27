'use client'

import { Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'

export function HoverExample() {
  return (
    <>
      <div className="flex space-x-1">
        <nav className="relative">
          <ul className="flex">
            {navConfig.map(({ label, sublinks }) => (
              <MenuItem label={label} subLinks={sublinks} key={label} />
            ))}
          </ul>
        </nav>
      </div>

      {/* <CodeBlock>
        {`
const MenuItem = ({ label, subLinks = [] }: MenuItemProps) => {
  const [subMenuState, setSubMenuState] = useState<'visible' | 'hidden'>(
    'hidden'
  )

  const subMenuVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        damping: 0,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <motion.li
      className="py-4"
      onHoverStart={() => setSubMenuState('visible')}
      onHoverEnd={() => setSubMenuState('hidden')}
    >
      <span className="px-4 cursor-pointer text-button-primary">{label}</span>
      <motion.ul
        className="border-slate-400/25 border-2 w-36 absolute top-14 bg-button-primary"
        animate={subMenuState}
        variants={subMenuVariants}
        initial="hidden"
      >
        {subLinks.map((subLink) => (
          <li
            key={subLink.label}
            className="py-2 hover:opacity-70 transition-opacity"
          >
            <Link href={subLink.href}>{subLink.label}</Link>
          </li>
        ))}
      </motion.ul>
    </motion.li>
  )
}
`}
      </CodeBlock> */}
    </>
  )
}

interface MenuItemProps {
  label: string
  subLinks?: { label: string; href: string }[]
}
const MenuItem = ({ label, subLinks = [] }: MenuItemProps) => {
  const [subMenuState, setSubMenuState] = useState<'visible' | 'hidden'>(
    'hidden'
  )

  const subMenuVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        damping: 0,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <motion.li
      className="py-4"
      onHoverStart={() => setSubMenuState('visible')}
      onHoverEnd={() => setSubMenuState('hidden')}
    >
      <span className="px-4 cursor-pointer text-white hover:opacity-70 transition-opacity">
        {label}
      </span>
      <motion.ul
        className="border-slate-700/25 border-2 w-36 rounded-md absolute top-14 px-3"
        animate={subMenuState}
        variants={subMenuVariants}
        initial="hidden"
      >
        {subLinks.map((subLink) => (
          <li
            key={subLink.label}
            className="py-2 hover:opacity-70 transition-opacity"
          >
            <Link href={subLink.href}>{subLink.label}</Link>
          </li>
        ))}
      </motion.ul>
    </motion.li>
  )
}

const navConfig = [
  {
    label: 'Item 1',
    sublinks: [
      { label: 'SubLink 1', href: '' },
      { label: 'SubLink 2', href: '' },
      { label: 'SubLink 3', href: '' },
    ],
  },
  {
    label: 'Item 2',
    sublinks: [
      { label: 'SubLink 1', href: '' },
      { label: 'SubLink 2', href: '' },
      { label: 'SubLink 3', href: '' },
    ],
  },
  {
    label: 'Item 3',
    sublinks: [
      { label: 'SubLink 1', href: '' },
      { label: 'SubLink 2', href: '' },
      { label: 'SubLink 3', href: '' },
    ],
  },
  {
    label: 'Item 4',
    sublinks: [
      { label: 'SubLink 1', href: '' },
      { label: 'SubLink 2', href: '' },
      { label: 'SubLink 3', href: '' },
    ],
  },
  {
    label: 'Item 5',
    sublinks: [
      { label: 'SubLink 1', href: '' },
      { label: 'SubLink 2', href: '' },
      { label: 'SubLink 3', href: '' },
    ],
  },
]
