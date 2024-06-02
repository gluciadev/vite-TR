import { createFileRoute } from '@tanstack/react-router'
import { ExampleLazySC } from '../screens/ExampleLazySC'

export const Route = createFileRoute('/examplelazy')({
  component: () => <ExampleLazySC></ExampleLazySC>
})