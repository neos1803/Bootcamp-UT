const User = require('../src/11.js')

test('find user by username', () => {
    expect(User.findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})