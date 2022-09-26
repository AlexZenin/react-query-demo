import { useTodos } from '../hooks/useTodos'

export function ChildComponent() {
  const todos = useTodos()

  return (
    <div>
      {todos.data.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
