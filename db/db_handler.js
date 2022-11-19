
const {MongoClient} = require('mongodb');

let client;

async function connect(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://localhost:27012/";
  
  
    client = new MongoClient(uri);
  
    try {
        // Connect to the MongoDB cluster
        await client.connect();
  
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
  }
  
  connect().catch(console.error);
  
  module.exports.client = client;
  module.exports.connect = connect;
  module.exports = mongoose.model("User", userSchema);
  connect(); 