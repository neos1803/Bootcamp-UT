const Item = require('../src/12.js')

describe('Function test', () => {
    it('returns true', () => {
        expect(Item.findById(5).isOnSale()).toBeTruthy()
    })

    it('returns false', () => {
        expect(Item.findById(3).isOnSale()).toBeFalsy()
    })
})