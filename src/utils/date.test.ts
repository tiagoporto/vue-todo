import { shallowMount } from '@vue/test-utils'
import { formatDate } from './date'

describe('formatDate', () => {
  it('formatDate', () => {
    expect(formatDate('2020-01-05T23:25:07.551Z')).toBe('Jan 5, 2020')
  })

  // TODO: create more tests
})
