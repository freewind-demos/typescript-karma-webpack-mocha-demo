import hello from '../src/hello'

describe('hello', function () {

  it('should return hello words for a given name', function () {
    expect(hello('karma')).toBe('Hello, karma!')
  })

})
