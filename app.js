const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const {get_transactions, get_transaction, new_transaction} = require('./src/transaction')
const {displayTransaction, displayAllTransactions} = require('./src/view')
app.use(express.json())

app.get('/get-transactions', (request, response) => {
    response.json(get_transactions());

})
  
app.get('/html/transaction/:id', (request, response) => {
  response.send(displayTransaction(get_transaction(request.params.id)))
})


app.get('/html/all_transactions', (request, response) => {
  response.send(displayAllTransactions(get_transactions()))
})

app.post('/post-transaction', (request, response) => {  
    new_transaction(request.body["nom_client"], request.body["montant"])
      response.send({message:"Nouvelle Transaction"})    
})

app.get('/get-transaction/:id', (request, response) => {
  const id = request.params.id; 
  response.json(get_transaction(id));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })