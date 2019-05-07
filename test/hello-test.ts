import hello from '../src/hello'
import {expect} from 'chai';

describe('hello', function () {

  it('should return hello words for a given name', function () {
    expect(hello('karma')).to.equal('Hello, karma!')
  })

})
