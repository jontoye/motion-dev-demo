'use client'

import { AnimatedTabs } from '@/components/animated-tabs'
import { DragExample } from '@/components/drag-example'
import { HoverExample } from '@/components/hover-example'
import { StaggeredList } from '@/components/staggered-list'
import * as motion from 'motion/react-client'
import ScrollPage from '../components/scroll-example'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex flex-col h-screen justify-center items-center max-w-4xl mx-auto text-center py-10">
        <AnimatedTitle />
      </section>

      <section className="flex flex-col items-center justify-center border border-white py-6">
        <h2 className="text-5xl font-bold text-white">Gestures 👋</h2>
        <motion.div
          className="h-full w-full py-8 space-y-10"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex justify-center max-w-[800px] mx-auto py-36 border rounded-lg">
            <HoverExample />
          </div>
          <div className="flex justify-center max-w-[800px] mx-auto py-36 border rounded-lg">
            <DragExample />
          </div>
        </motion.div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center border border-white py-6">
        <h2 className="text-5xl font-bold text-white">Scroll</h2>
        <motion.div
          className="h-full w-full py-8"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{
            once: true,
          }}
        >
          <ScrollPage />
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-center border border-white py-6">
        <h2 className="text-5xl font-bold text-white">Layout</h2>
        <motion.div
          className="h-full w-full py-8"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center max-w-[800px] mx-auto py-36 border rounded-lg">
            <AnimatedTabs />
          </div>

          <div className="flex justify-center max-w-[800px] mx-auto py-36 border rounded-lg">
            <a
              href="https://examples.motion.dev/react/app-store?utm_source=embed"
              target="_blank"
              rel="noreferrer"
            >
              App Store Example ↗️
            </a>
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-6 items-center justify-center border border-white py-6">
        <h2 className="text-5xl font-bold text-white">Staggered List</h2>
        <div className="flex justify-center max-w-[800px] mx-auto py-36 border rounded-lg">
          <StaggeredList />
        </div>
      </section>
    </main>
  )
}

const AnimatedTitle = () => {
  const firstPartVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const secondPartVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 1.8, type: 'spring' },
    },
  }

  return (
    <div className="flex gap-2 overflow-hidden whitespace-nowrap">
      <motion.span
        variants={firstPartVariants}
        initial="initial"
        animate="animate"
        className="text-5xl font-bold text-white"
      >
        Declarative Web Animations
      </motion.span>
      <motion.span
        variants={secondPartVariants}
        initial="initial"
        animate="animate"
        className="text-5xl font-bold text-brand"
      >
        with Motion
      </motion.span>
    </div>
  )
}
