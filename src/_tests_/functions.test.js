//When writing unit tests or component tests, place them into a _tests_ folder. This is what the test script in React looks for. The naming convention for files is to use to .test extension following the name of the file being tested(example: if you are testing a file named functions.js, the test file would be called functions.test.js). When testing individual functions, require them to your test file. These functions can from files only containing functions, components, etc.
const {sum, sayHello} = require('../functions');

//Test is the function that helps keep your test organized in two parts
//1. A description of what the test does(be specific!)
//2. A callback function that contains the actual test.
test('adds 1 + 2 to equal 3', () => {
    //Expect is passed the value or function you are testing. In the example here, we are testing sum invoked passing the arguments of 1 and 2. Chained onto expect are matchers. This matcher(toBe) is checking if sum(1, 2) returns a value of 3.
    expect(sum(1, 2)).toBe(3)
})

test('2 + 2 does not equal 5', () => {
    //The not matcher flips whatever matcher it's attached to. For example, the code below checks to see if sum(2, 2) does NOT equal 5.
    expect(sum(2, 2)).not.toBe(5)
})

test('sayHello func says hello', () => {
    expect(sayHello()).toBe('Hello')
})

let names = ['John', 'Ariel', 'Zach'];
let numbers = [1, 2, 3]

test('Names contains John', () => {
    //toContain will check the contents of an array. NOTE: It does NOT check the contents of an object inside of an array.
    expect(names).toContain('John')
})

test('Numbers contains 3', () => {
    expect(numbers).toContain(3)
})

test('can add property to object', () => {
    const data = {one: 1};
    data['two'] = 2;

    //toEqual is for checking complex datatypes, such as objects. It is directly related to the toBe matcher, but toBe is for simple datatypes, like strings and numbers.
    expect(data).toEqual({one: 1, two: 2})
})