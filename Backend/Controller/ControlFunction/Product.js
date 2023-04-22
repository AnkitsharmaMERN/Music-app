const express = require('express')
const productdetails = require('../../Model/ProductSchema')



const AllProducts = async (req, res, next) => {
    try {
        const token = req.cookies.Music
        console.log(token)
        if (token) {
            const product = await productdetails.find()
            // console.log(product)
            res.status(200).json(product)
        } else {
            res.status(201).send({
                // status: 201,
                msg: 'please login with your credientials'
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            msg: error
        })
    }
}


const singleproduct = async (req, res, next) => {
    try {
        const id = req.params.id
        console.log(id)
        const singledetails = await productdetails.findById(id)
        console.log(singledetails)
        res.status(200).send({
            status: 200,
            singledetails
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            msg: error
        })
    }
}



module.exports = {
    singleproduct,
    AllProducts
}