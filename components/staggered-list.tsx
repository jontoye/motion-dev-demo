import * as motion from 'motion/react-client'

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Motion',
  'Node.js',
  'GraphQL',
  'Python',
  'FastAPI',
  'SQL',
  'MongoDB',
  'Elixir',
  'Go',
  'Vue.js',
  'Angular',
  'Svelte',
  'Redux',
  'Django',
  'Ruby on Rails',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP',
  'Jest',
  'Cypress',
  'Tailwind CSS',
  'Styled Components',
  'PostgreSQL',
  'Redis',
  'Terraform',
  'WebSocket',
  'Firebase',
  'Machine Learning',
  'Data Science',
  'CI/CD',
  'Webpack',
  'GraphQL Apollo Client',
  'Prisma',
  'Jupyter Notebooks',
]

export function StaggeredList() {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }
  return (
    <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
      {skills.map((skill, index) => (
        <motion.li
          key={skill}
          className="bg-white border border-black rounded-xl px-4 py-2"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  )
}
