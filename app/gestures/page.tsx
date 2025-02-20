import { DragExample } from '@/components/drag-example'
import { HoverExample } from '@/components/hover-example'

export default function GesturesPage() {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl text-brand mb-4">Hover</h2>
      <HoverExample />

      <h2 className="text-3xl text-brand mb-4">Drag</h2>
      <DragExample />
    </main>
  )
}
