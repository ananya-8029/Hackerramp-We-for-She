const products = {
  12345: {
    id: "12345",
    name: "Cool T-Shirt",
    description: "A very cool t-shirt.",
    price: 19.99,
  },
  67890: {
    id: "67890",
    name: "Stylish Jeans",
    description: "Stylish and comfortable jeans.",
    price: 49.99,
  },
  // Add more products as needed
};
const ootds = [
  {
    id: 1,
    imageUrl: "http://localhost:5000/uploads/sample1.jpg",
    productId: "12345",
  },
  {
    id: 2,
    imageUrl: "http://localhost:5000/uploads/sample2.jpg",
    productId: "67890",
  },
  // Add more OOTD posts as needed
];
//this function will help us to find the  product mentioned in the ootd!
//we will search in product db through product id which will be  unique for each product and then return it accordingly!
//works to do connect product DB and then implement the logic!
//we can use same function for the shoppable post also
const getProductById=async()=>{
// console.log(body);
console.log("I m providing the body!");
return("I m providing the body!");
//   try{
//       await client.connect()
//       const db = client.db("bloodbank");
//       const coll = db.collection("bloodbank");
//       const data = await coll.find().toArray()
//       console.log(data)
//       return data
//   }
//   catch(err){
//       console.log("Error occurred")
//       return err;
//   }
//   finally{
//       await client.close()
//   } 
  };
module.exports={
      getProductById
} 
