import app from '~/app'

describe('app', () => {
  it('app name must be app', () => {
    expect(app.name).toBe('app')
  })
})
