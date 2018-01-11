const generatePhonewords = require('./generate-phonewords')

test('should return correct strings, sorted a -> z', () => {
  const expectedOutput = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(generatePhonewords('23')).toEqual(expectedOutput)
})

test('should handle a number input', () => {
  const expectedOutput = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(generatePhonewords(23)).toEqual(expectedOutput)
})

test('should not error with non-number character', () => {
  const expectedOutput = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(generatePhonewords('2r3')).toEqual(expectedOutput)
})

test('should not error with a 1', () => {
  const expectedOutput = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(generatePhonewords('213')).toEqual(expectedOutput)
})
