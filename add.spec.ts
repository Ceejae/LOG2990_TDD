import { expect } from 'chai'

import { add } from './add'

describe('add function', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).to.equal(0);
    });
    it('should return n for a unique number n', () => {
        expect(add('2')).to.equal(2);
    });
    it('should return n for a unique number n', () => {
        expect(add('14')).to.equal(14);
    });
    it('should return the sum of two numbers seperated by a coma', () => {
        expect(add('2,3')).to.equal(5);
    });
    it('should return the sum of n numbers seperated by a coma', () => {
        expect(add('2,3,5')).to.equal(10);
    });
    it('should return the sum of n numbers seperated by a coma', () => {
        expect(add('11,10,2,3,5,1,3')).to.equal(35);
    });
    it('should return the sum of n numbers seperated by a coma or backslash n character if valid', () => {
        expect(add('1\n2,3')).to.equal(6);
    });
    it('should return the sum of n numbers seperated by a coma or backslash n character if valid', () => {
        expect(add('1\n,')).to.throw;
    });
});