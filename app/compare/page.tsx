'use client'

import { AnimatePresence } from 'motion/react'
import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function ComparePage() {
  const [modals, setModals] = useState({
    none: false,
    good: false,
    bad: false,
  })

  const close = (modal: string) => {
    setModals((prev) => ({
      ...prev,
      [modal]: false,
    }))
  }

  const open = (modal: string) => {
    setModals((prev) => ({
      ...prev,
      [modal]: true,
    }))
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-10">
        <button onClick={() => open('none')}>❌ No Animation</button>
        <button onClick={() => open('good')}>✅ With Animation</button>
        <button onClick={() => open('bad')}>❌ Bad Animation</button>
      </div>

      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      />

      <AnimatePresence initial={false}>
        {modals.good && <Modal handleClose={() => close('good')} />}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {modals.bad && <ModalBad handleClose={() => close('bad')} />}
      </AnimatePresence>

      {modals.none && (
        <div
          onClick={() => close('none')}
          className="absolute top-0 left-0 h-full w-full bg-black flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[500px] w-[300px] flex items-center justify-center bg-white rounded-xl"
          >
            <Image
              width={173}
              height={24}
              src="https://assets.cloud.pennylane.ai/pennylane_website/generic/logo.svg"
              alt=""
            />
          </div>
        </div>
      )}
    </main>
  )
}

const Modal = ({ handleClose }: { handleClose: () => void }) => {
  const variants = {
    hidden: {
      scale: 0.7,
      opacity: 0,
    },
    visible: {
      y: '0',
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="h-[500px] w-[300px] flex items-center justify-center bg-white rounded-xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          width={173}
          height={24}
          src="https://assets.cloud.pennylane.ai/pennylane_website/generic/logo.svg"
          alt=""
        />
      </motion.div>
    </Backdrop>
  )
}

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 h-full w-full bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

const ModalBad = ({ handleClose }: { handleClose: () => void }) => {
  const variants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: '0',
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 2000,
        damping: 4,
        mass: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="h-[500px] w-[300px] flex items-center justify-center bg-white rounded-xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          width={173}
          height={24}
          src="https://assets.cloud.pennylane.ai/pennylane_website/generic/logo.svg"
          alt=""
        />
      </motion.div>
    </Backdrop>
  )
}
