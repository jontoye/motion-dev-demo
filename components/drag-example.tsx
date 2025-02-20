import React from 'react'
import * as motion from 'motion/react-client'

export function DragExample() {
  return <motion.div drag style={box} />
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#dd00ee',
  borderRadius: 10,
}
