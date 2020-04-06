import bankAccount from '../bankAccount';

//describe allows you to bundle tests that are related to each other. Simply wrap related tests in the describe function. Describe takes two arguments:
//1. What is this group of tests for(in a string)
//2. A callback function that contains all of your tests.
describe('Bank account methods and properties', () => {
    //beforeEach will run given functionality before each test runs. In the given case, it will reset the bankAccount balance to 1000 before each tests runs. This is IMPORTANT, as it makes sure the result of one function isn't altered by the result of another.
    beforeEach(() => {
        bankAccount.balance = 1000;
    })

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000);
    })

    test('depositMoney should correctly alter balance', () => {
        bankAccount.depositMoney(2000);
        expect(bankAccount.balance).toBe(3000);
    })

    test('withdrawMoney should correctly alter balance', () => {
        bankAccount.withdrawMoney(2000);
        expect(bankAccount.balance).toBe(-1000);
    })
})