//aqui é apenas a chamada da model/services/DAO

const Validator = require('../services/Validator')
const Customer = require('../model/Customer')
const CustomerDAO = require('../DAO/CustomerDAO')


module.exports = (app) => {
    app.get('/customer', async (req, res) => {
        try {
            const list = await CustomerDAO.listCustomer(res)
            res.status(200).json(list)
        } catch (e) {
            res.status(400).json(e.message)
        }
    })
    app.get('/customer/id/:id', async (req, res) => {
        try {
            const listId = await CustomerDAO.listCustomerForId(req.params.id)
            res.status(200).json(listId)
        } catch (e) {
            res.status(400).json(e.message)
        }
    })
    app.get('/customer/cpf/:CPF', (req, res) => {
        try {
            const listCPF = CustomerDAO.listCustomerForCPF(req.params.CPF)
            res.status(200).json(listCPF)
        } catch {
            res.status(400).json(e.message)
        }
    })
    app.post('/customer', async (req, res) => {
        // const exist = await Validator.customer(req.body.CPF, req.body.FIRST_NAME, req.body.LAST_NAME)
        const exist = await Validator.customer(req.body.CPF, req.body.FIRST_NAME, req.body.LAST_NAME)

        if(exist){
            const customer = new Customer(...Object.values(req.body))
            try {
                const response = await CustomerDAO.createCustomer(customer)
                res.status(201).json(response)
    
            } catch (e) {
                res.status(400).json(e.message)
            }

        }else{
            res.status(400).json({erro:'Cpf já registrado'})
        }
    })
    app.put('/customer/:id', async (req,res) =>{
        try{
            const alter = await CustomerDAO.alterCustomer(req.param.id, req.body)
            res.status(200).json(alter)
        }catch(e){
            res.status(400).json(e.message)
        }
    })

    app.delete('/customer/:id', async (req, res)=>{
        try{
            const del = await CustomerDAO.deleteCustomer(req.params.id)
            res.status(200).json(del)
        }catch(e){
            res.status(400).json(e.message)
        }
    })
}

