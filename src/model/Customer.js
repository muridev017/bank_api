//model entra junto com o validator

const Validator = require('../services/Validator')

class Customer {
    constructor(cpf, firstName, lastName, AGENCY, COUNT_NUMBER,BANK_BALANCE = '0.0') {
        this.CPF = cpf, //11 Dígitos
            this.FIRST_NAME = firstName, //mínimo 3 caracteres
            this.LAST_NAME = lastName, //mínimo 3 caracteres
            this.AGENCY = AGENCY,
            this.COUNT_NUMBER = COUNT_NUMBER,
            this.BANK_BALANCE = BANK_BALANCE
    }
    deposit(deposit) {
        if (Validator.deposit(deposit)) {
            this.BANK_BALANCE = `${parseFloat (this.BANK_BALANCE) + parseFloat (deposit)}`
        } else {
            console.log('Valor inválido.')
        }
    }
    bankDraft(value) {
        if (Validator.bankDraft(value, this.BANK_BALANCE)) {
            this.BANK_BALANCE = `${parseFloat (this.BANK_BALANCE) -  parseFloat (value)}`
            console.log('Saque efetuado com sucesso, seu saldo atual é de: ' + this.BANK_BALANCE)
        } else {
            console.log('Erro na transação, saldo insuficiente.')
        }

    }
    transfer(countDestination, value) {
        console.log(Validator.transfer(this.BANK_BALANCE, countDestination, value))
        if(Validator.transfer(this.BANK_BALANCE, countDestination, value) && Validator.deposit(value)){
            this.bankDraft(value)
            countDestination.deposit(value)
            console.log('Transferência efetuada com sucesso!')
        } else {
            console.log('Operação não autorizada.')
        }
    }
}

module.exports = Customer

