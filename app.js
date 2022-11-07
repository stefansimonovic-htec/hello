const express = require('express')
const app = express()
const port = 3000

// const { MongoClient } = require("mongodb");
// const url = 'mongodb://mongo:27017';
// const client = new MongoClient(url);
// const dbName = 'hello-db';

// async function run() {
//     await client.connect();
//     console.log('Connected successfully to mongodb!');
//     const db = client.db(dbName);  
//     return 'done.';
// }

// run()
//   .then(console.log)
//   .catch(console.error);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})