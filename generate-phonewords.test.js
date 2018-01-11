const generatePhonewords = require('./generate-phonewords')

test('should return correct strings, sorted a -> z', () => {
  const expectedOutput = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(generatePhonewords(23)).toEqual(expectedOutput)
})
