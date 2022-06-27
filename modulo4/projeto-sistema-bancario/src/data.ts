export type balanceClient={
    balance: number,
    transfer: number,
    remove: number,
    deposit: number
}

export  type user={
    id: number,
    name: string,
    cpf: number,
    birth: Date,
    balance: number,
    internalTransfer: number[]
}
   export let users: user[] = [
        {
            id: 1,
            name: "Alma",
            cpf: 77777777777,
            birth: new Date('1989-04-18'),
            balance: 0,
            internalTransfer: [2000]
        },
        {
            id: 2,
            name: "Joana",
            cpf: 11111111111,
            birth: new Date('1997-04-18'),
            balance: 0,
            internalTransfer: [400]
        },
        {
            id: 3,
            name: "Lucia",
            cpf: 44444444444,
            birth: new Date('1990-04-18'),
            balance: 0,
            internalTransfer: [1000]
        },
        {
            id: 4,
            name: "Cristiane",
            cpf: 33333333333,
            birth: new Date('1987-04-18'),
            balance: 0,
            internalTransfer: [5000]
        },
        {
            id: 5,
            name: "Edilson",
            cpf: 22222222222,
            birth: new Date('1984-04-18'),
            balance: 0,
            internalTransfer: [200]
        },
        {
            id:6,
            name: "Lila",
            cpf: 55555555555,
            birth: new Date('1992-11-12'),
            balance: 0,
            internalTransfer: [2500]
        }
    ]

    export  type balance={
        userId: number,
        saldo: number,
        date: number,
        description: string,
      
    }
       export let balances: balance[] = [
            {
                userId: 1,
                saldo: 2000,
                date: 10/2/2022,
                description: "Saldo total atual",
            },
            {
                userId: 2,
                saldo: 3000,
                date: 10/10/2022,
                description: "Saldo total atual",
            },
            {
                userId: 3,
                saldo: 3500,
                date: 10/1/2022,
                description: "Saldo total atual",
            },
            {
                userId: 4,
                saldo: 5000,
                date: 10/5/2022,
                description: "Saldo total atual",
            },
            {
                userId: 5,
                saldo: 5000,
                date: 10/3/2022,
                description: "Saldo total atual",
            },
            {
                userId: 6,
                saldo: 1000000,
                date: 10/8/2022,
                description: "Saldo total atual",
            }
       ]
