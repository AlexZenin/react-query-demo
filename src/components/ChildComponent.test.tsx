import { DefinedQueryObserverResult } from '@tanstack/react-query'
import * as useTodos from '../hooks/useTodos'
import { render } from '../utils/test-utils'
import { ChildComponent } from './ChildComponent'

describe('ChildComponent', () => {
  beforeAll(() => {
    const mockUseTodos = jest.spyOn(useTodos, 'useTodos')
    mockUseTodos.mockImplementation(
      () =>
        ({
          data: ['mocktodo1', 'mocktodo2'],
        } as unknown as DefinedQueryObserverResult<string[]>),
    )
  })
  it('should render a list of todos', () => {
    render(<ChildComponent />)
  })
})
