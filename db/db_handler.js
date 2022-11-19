const mongoose = require("mongoose");

let client;
let users;
let isInitialized = false;

function close(){
    client.close()
}

async function connect(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://0.0.0.0:27017/";
  
  
  
    try {
        
        // Connect to the MongoDB cluster        
        // await client.connect(); 
        // const db = client.db('OpticalDb');
        // users = db.collection('Users');
        mongoose.connect(uri);
        isInitialized = true;

  
    } catch (e) {
        console.error(e);
  }  
}
  
  module.exports.client = client;
  module.exports.connect = connect;
  module.exports.close = close;