const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
