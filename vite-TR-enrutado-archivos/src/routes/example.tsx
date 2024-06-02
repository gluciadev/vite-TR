import { createFileRoute } from '@tanstack/react-router'
import { ExampleSC } from '../screens/ExampleSC'

export const Route = createFileRoute('/example')({
  component: () => <ExampleSC></ExampleSC>
})