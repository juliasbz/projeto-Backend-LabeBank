export type Pagamento = {
    valor: number,
    descricao: string,
    dataPagamento: string
}

export type Conta = {
    id: number,
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato: Pagamento[]
}

export let contas: Conta[] = [
    {
        id: 1,
        nome: "Julia",
        cpf: "123456789",
        dataNascimento: "01/01/1996",
        saldo: 10000,
        extrato: [
            {
                valor: 200,
                descricao: "conta de luz",
                dataPagamento: "05/08/2022"
            }
        ]
    },
    {
        id: 2,
        nome: "Marcela",
        cpf: "123456788",
        dataNascimento: "01/01/1995",
        saldo: 0,
        extrato: [
            {
                valor: 5000,
                descricao: "cartão de crédito",
                dataPagamento: "15/08/2022"
            }
        ]
    }
]