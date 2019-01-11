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
});