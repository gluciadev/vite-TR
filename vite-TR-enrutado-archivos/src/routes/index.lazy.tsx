import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/examplelazy">Example LAZY SCREEN</Link>
      <hr></hr>
      <Link to="/example">Example CLASSIC SCREEN</Link>
    </div>
  )
}