'use client'

import { Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'

export interface NavMenuProps {
  items: {
    label: string
    href: string
    sublinks: { label: string; href: string }[]
  }[]
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <nav>
      <ul className="flex gap-12">
        {items.map(({ label, href, sublinks }) => (
          <MenuItem label={label} href={href} subLinks={sublinks} key={label} />
        ))}
      </ul>
    </nav>
  )
}

interface MenuItemProps {
  label: string
  href: string
  subLinks?: { label: string; href: string }[]
}
const MenuItem = ({ label, href, subLinks = [] }: MenuItemProps) => {
  const [subMenuState, setSubMenuState] = useState<'visible' | 'hidden'>(
    'hidden'
  )

  // const subLinkVariants: Variants = {
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     display: 'block',
  //     transition: {
  //       damping: 0,
  //     }
  //     // transition: {
  //     //   duration: 0.5,
  //     // }
  //   },
  //   hidden: {
  //     opacity: 0,
  //     y: 20,
  //     transitionEnd: {
  //       display: 'none'
  //     }
  //   }
  // }
  const subLinkVariants: Variants = {
    visible: {
      opacity: 1,
      scaleY: 1,
      originY: 0,
      display: 'block',
      transition: {
        damping: 0,
      },
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
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
      <Link className="px-4" href={href}>
        {label}
      </Link>
      <motion.ul
        className="border-slate-400/25 border-2 w-36 absolute top-14"
        animate={subMenuState}
        variants={subLinkVariants}
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
