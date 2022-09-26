import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../services/todoService'
import { ChildComponent } from './ChildComponent'

function Example() {
  const exampleData = useQuery(['example'], fetchTodos)

  if (exampleData.isLoading) {
    return <div>Loading...</div>
  }

  if (exampleData.isError) {
    return <div>Error: {JSON.stringify(exampleData.error)}</div>
  }

  return <ChildComponent />
}

export default Example
