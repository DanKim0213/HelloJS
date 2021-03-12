/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-require */
const { expect } = require('chai');
const sinon = require('sinon');
const MyClass = require('../src/dan/unit-test/MyClass');

const myObj = new MyClass();

describe('Test suit', () => {
  it.skip('Test the add method', () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  it('mock the sayHello method', () => {
    const mock = sinon.mock(myObj);
    const expectation = mock.expects('sayHello');
    expectation.exactly(1);
    expectation.withArgs('Hello World');
    myObj.callAnotherFn(10, 20);
    mock.verify();
  });

  it.skip('stub the add method', () => {
    const stubAdd = sinon.stub(myObj, 'add');
    stubAdd.withArgs(10, 20).returns(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
  });
});
