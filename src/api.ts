const conta = {
    id: '1',
    email: 'nicolas@gmail.com',
    password: '123456',
    name: 'Nicolas Silva Carvalho',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})