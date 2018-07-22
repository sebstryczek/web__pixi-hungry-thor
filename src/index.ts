interface TestInterface {
  testString: string;
}

class TestClass implements TestInterface {
  testString: string;

  constructor(public s: string) {
    this.testString = s;
  }
}

function testFunction(s : TestInterface) {
  return `Test: ${s.testString}`;
}

const test = new TestClass("!@#");
document.body.innerHTML = testFunction(test);
