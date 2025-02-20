import { Link } from '@/components/link'
import * as motion from 'motion/react-client'

const navConfig: { label: string; href: string }[] = [
  { label: 'Transitions', href: 'transitions' },
  { label: 'Gestures', href: 'gestures' },
  { label: 'Scroll', href: 'scroll' },
  { label: 'Layout', href: 'layout' },
]

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto text-center py-10">
      <motion.h1 className="text-5xl font-bold text-brand">
        Declarative Web Animations with Motion
      </motion.h1>
      <motion.h2 className="text-xl">A React/JavaScript Library</motion.h2>

      <div className="flex flex-col gap-4 items-center py-16">
        {navConfig.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </main>
  )
}
