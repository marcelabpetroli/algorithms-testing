const { isUnique, isPermutation } = require('./algorithms')

test('given the word banana returns false', () => {
  expect(isUnique('banana')).toBe(false)
})

test('given the word buy returns true', () => {
  expect(isUnique('buy')).toBe(true)
})

test('if given one letter returns the letter', () => {
  expect(isUnique('t')).toBe('t')
})

test('if given two equal letter returns false', () => {
  expect(isUnique('aa')).toBe(false)
})

// Testing isPermutation
test('if given the words act and cat return true', () => {
  expect(isPermutation('act', 'cat')).toBe(true)
})

test('if given the words three and tree return false', () => {
  expect(isPermutation('three', 'tree')).toBe(false)
})
