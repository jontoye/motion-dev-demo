import * as motion from 'motion/react-client'

export function DragExample() {
  return (
    <motion.div className="flex gap-8">
      <motion.div drag style={box} whileDrag={{ scale: 1.2 }} />
      <motion.div drag style={box} whileDrag={{ scale: 1.2 }} />
      <motion.div drag style={box} whileDrag={{ scale: 1.2 }} />
    </motion.div>
  )
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#dd00ee',
  borderRadius: 10,
}
