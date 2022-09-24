const palindrome = require('../palindrome/palindrome');

describe('palindrome()', () => {
    it('should return palindrome', () => {
        expect(palindrome('madam')).toEqual(['madam']);
    });
});