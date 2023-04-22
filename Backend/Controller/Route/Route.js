const express = require('express');
const { Registraion,login, UserProfile, Addtofavorite, favoriteSongs} = require('../ControlFunction/user');
const {singleproduct, AllProducts} = require('../ControlFunction/Product')



// here is the user route section 
// here I call the router function in the express 
const router = express.Router();


router.post('/signup',Registraion)

router.post('/login',login)

router.post('/Addtofavorite',Addtofavorite)

router.get('/Profile',UserProfile)
 
router.get('/getfavSong',favoriteSongs)



// Here is the Product route section 


router.get('/products',AllProducts)

router.get('/product/:id',singleproduct)





module.exports = router