import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-iyhcgvk-shard-00-00.ilfkqhy.mongodb.net:27017,ac-iyhcgvk-shard-00-01.ilfkqhy.mongodb.net:27017,ac-iyhcgvk-shard-00-02.ilfkqhy.mongodb.net:27017/?ssl=true&replicaSet=atlas-n41hk1-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log('database connected successfully');
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
}

export default Connection;