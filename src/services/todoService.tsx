export const TODO_DATA = ['todo1', 'todo2', 'todo3']

export function fetchTodos(): Promise<string[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(TODO_DATA)
    }, 2000)
  })
}
