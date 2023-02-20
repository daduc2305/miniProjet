var transactions = [ {
    nom_client: "toto",
    montant: 100
},
{
    nom_client: "mama",
    montant: 300
}

]

function get_transactions() {
    return transactions
}

function new_transaction(nom_client, montant){
    transactions.push({
        nom_client: nom_client,
        montant: montant
    })

}


function get_transaction(transaction_number){
    return transactions[transaction_number]
}



module.exports.get_transactions = get_transactions
module.exports.get_transaction = get_transaction
module.exports.new_transaction = new_transaction