const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(new Date().toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


async function main(){

  const uri = "mongodb://mongoadmin:secret@mongodb:27017/admin";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB callsker 

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
