function displayTransaction(transaction){
    return`
    <html>
        <body>
            Nom du client : ${transaction.nom_client}<br>
            Montant : ${transaction.montant}<br>
        </body>
    </html>`
}
function displayAllTransactions(transactions){
    let liste = transactions.map(transaction =>
        `<tr>
            <td>${transaction.nom_client}</td>
            <td>${transaction.montant}</td>
        </tr>`)
    return `<table>
            <tr>
                <th>Nom Client</th>
                <th>Montant</th>
            </tr>
            ${liste}
        </table>`
    
        }

        module.exports.displayTransaction = displayTransaction
        module.exports.displayAllTransactions = displayAllTransactions