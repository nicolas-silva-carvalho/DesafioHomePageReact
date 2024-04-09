import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Alert com boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled()
    })
})