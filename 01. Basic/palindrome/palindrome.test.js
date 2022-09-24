const palindrome = require('./palindrome');

describe("palindrome() ", () => {
    it(" should return palindrome", () => {
        except(palindrome('madam')).toEqual(['madam']);
    })
})