import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../services/todoService'

export function useTodos() {
  const todos = useQuery(['example'], fetchTodos)

  if (!todos.data) {
    throw new Error('Expected exampleData to be loaded from parent component')
  }

  return todos
}
