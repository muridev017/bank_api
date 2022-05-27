const conection = require('../Infra/conection')

class CustomerDAO {
    static createCustomer(customer) {
        const query = `
        INSERT INTO "CUSTOMER" (CPF, FIRST_NAME, LAST_NAME, AGENCY, COUNT_NUMBER, BANK_BALANCE) VALUES (?,?,?,?,?,?)
        `

        return new Promise((resolve, reject) => {
            conection.run(query, Object.values(customer), (e) => {
                if (e) {
                    reject('Erro ao criar conta', { erro: e.message })
                } else {
                    resolve({Customer: customer })
                }
            })
        })
    }
    static listCustomer() {
        const query = `
        SELECT * FROM "CUSTOMER"
        `
        return new Promise((resolve, reject) => {
            conection.all(query, (e, result) => {
                if (e) {
                    reject({ 'mensagem': err.message, 'error': true })
                } else {
                    resolve({ result })
                }
            })
        })

    }
    static listCustomerForId(id) {
        const query = `
        SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ${id}
        `

        return new Promise((resolve, reject) => {
            conection.get(query, (e, result) => {
                if (e) {
                    reject({ 'mensagem': err.message, 'error': true })
                } else {
                    resolve({ result })
                }
            })

        })
    }
    static listCustomerForCPF(cpf) {
        const query = `
        SELECT * FROM CUSTOMER WHERE CPF = "${cpf}"
        `
        return new Promise((resolve, reject)=> {
            conection.get(query, (e, result) => {
                if (e) {
                    reject({ 'mensagem': err.message, 'error': true })
                } else {
                    resolve({...result })
                }
            })


        })
    }
    static alterCustomer(id, values) {
        const query = `
        UPDATE 'CUSTOMER' SET (CPF, FIRST_NAME, LAST_NAME, AGENCY, COUNT_NUMBER, BANK_BALANCE) = (?,?,?,?,?,?) WHERE CUSTOMER_ID = ?
        `

        return new Promise((resolve, reject) => {
            conection.all(query, [...Object.values(values), id], (e) => {
                if (e) {
                    reject({ 'mensagem': e.message, 'error': true })
                } else {
                    resolve({id, values })
                }
            })
        })
    }
    static deleteCustomer(id) {
        const query = `
        DELETE FROM CUSTOMER WHERE CUSTOMER_ID = ?
         `

        return new Promise((resolve, reject) => {

            conection.all(query, id, (e, result) => {
                if (e) {
                    reject({ 'mensagem': err.message, 'error': true })
                } else {
                    resolve({ result, id })
                }
            })

        })

    }
}
module.exports = CustomerDAO