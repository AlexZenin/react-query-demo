import { useQuery } from '@tanstack/react-query'

function fetchData(): Promise<{ data: string }> {
  return new Promise((res) => {
    setTimeout(() => {
      res({ data: 'Hello World' })
    }, 2000)
  })
}

function useExampleData() {
  const exampleData = useQuery(['example'], fetchData)

  if (!exampleData.data) {
    throw new Error('Expected exampleData to be loaded from parent component')
  }

  return exampleData
}

function useOtherData() {
  const exampleData = useExampleData()

  function logData() {
    console.log(
      JSON.stringify({
        data: exampleData.data.data,
        otherMessage: 'Hello World',
      }),
    )
  }

  return { logData }
}

function Example() {
  const exampleData = useQuery(['example'], fetchData)

  if (exampleData.isLoading) {
    return <div>Loading...</div>
  }

  if (exampleData.isError) {
    return <div>Error: {JSON.stringify(exampleData.error)}</div>
  }

  return <ChildComponent />
}

function ChildComponent() {
  const exampleData = useExampleData()
  const { logData } = useOtherData()

  return <button onClick={() => logData()}>{exampleData.data.data}</button>
}

export default Example
