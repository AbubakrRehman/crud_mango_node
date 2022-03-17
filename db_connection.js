const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const client=new MongoClient(url);
const databaseName="student_db";


async function db_connect(){
   const result=await client.connect();
   const db =result.db(databaseName);
   return  db.collection('student_collection');
}

module.exports=db_connect;

