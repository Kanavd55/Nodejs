const {mongoClient} = require('mongodb')

const url = "mongodb+srv://kanavdahat55:PF6lFqBtWpBwJ1ey@namastenode.dg19q.mongodb.net/"

const client = new mongoClient(url)
const dbName= 'HelloWorld'

async function main() {
    await client.connect()
    console.log("Connected successfully to server")
    const db = client.db(dbName)
    const collection = db.collection("User")

    return doesNotMatch;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());

