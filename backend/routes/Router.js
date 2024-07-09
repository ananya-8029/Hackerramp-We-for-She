const express = require('express');
const router = express.Router();
const repository=require('../repository/Repository');
const products = {
    '12345': { id: '12345', name: 'Cool T-Shirt', description: 'A very cool t-shirt.', price: 19.99 },
    '67890': { id: '67890', name: 'Stylish Jeans', description: 'Stylish and comfortable jeans.', price: 49.99 },
    // Add more products as needed
  };
  const ootds = [
    { id: 1, imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/ATF/Unrec-EngPC_1500x600._CB413925029_.jpg', productId: '12345' },
    { id: 2, imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jp', productId: '67890' },
    // Add more OOTD posts as needed
  ];
router.route('/')
.get((req,res) => {res.send("Got you..!!");})

router.route('/ootd')
.get((req, res) => { res.json(ootds);})

router.route('/product/id')
.get(repository.getProductById);





module.exports = router;
    