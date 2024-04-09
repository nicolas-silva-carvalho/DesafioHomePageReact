import { soma, multiplica } from "./soma"

describe('soma', () => {
    it('deve somar dois numeros', () => {
        let a = 1;
        let b = 2;
        const value = soma(a, b)
        expect(value).toBe(3)
    })

    it('deve multiplicar dois numeros', () => {
        let a = 1;
        let b = 2;
        const value = multiplica(a, b)
        expect(value).toBe(2)
    })
})
