const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserDetails = require('../../Model/UserSchema')




const key = "ANKITSHARMASECRETKEY"

const Registraion = async (req, res, next) => {
    try {
        const { Name, Email, Password, Cpassword } = req.body
        // console.log(Name)
        const users = await UserDetails.findOne({ Email: Email })
        if (users) {
            res.status(200).send({
                status: 200,
                msg: "User alerady exist"
            })
        } else {
            // Here bcrypt hash is used to make the hash password and here 10 is the salt of the function 
            const secpassword = await bcrypt.hash(Password, 10)
            //    console.log(secpassword)
            const user = await UserDetails.create({
                Name: Name,
                Email: Email,
                Password: secpassword
            })
            sendToken(user, 201, res)
            // res.status(200).send({
            //     status:200,
            //     user,
            //     msg:"user sucesssfully register"
            // })

        }

    } catch (error) {
        res.status(400).send({
            status: 400,
            msg: error
        })
    }
}
const login = async (req, res, next) => {
    try {
        const { Email, Password } = req.body
        console.log(Email)
        const user = await UserDetails.findOne({ Email: Email })
        console.log(user)
        if (user) {
            const passMatch = await bcrypt.compare(Password, user.Password)
            console.log(passMatch)
            if (passMatch) {
                sendToken(user, 200, res)

            }
        } else {
            res.status(201).send({
                status: 201,
                msg: "user not found"
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            msg: error
        })
    }
}

const sendToken = async (user, statuscode, res) => {
    console.log(user, statuscode)
    const token = jwt.sign({ _id: user._id }, key)
    const usertoken = await UserDetails.updateOne({ _id: user._id }, { $set: { Token: token } })
    // if (token) {
    console.log(token)
    res.status(200)
        .cookie('Music', token, {
            expires: new Date(Date.now() + 1800000),
            HttpOnly: true
        })
        .json({
            // status: statuscode,
            user
        })
    // }

}

const UserProfile = async (req, res, next) => {
    try {
        const token = req.cookies.Music
        console.log(token)
        if (token) {
            const decode = jwt.verify(token, key)
            // console.log(decode._id)
            const userData = await UserDetails.findById(decode._id)
            // console.log(user)
            if (userData) {
                res.status(200).send({
                    userData
                })
            }
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            msg: error
        })
    }
}



const Addtofavorite = async (req, res, next) => {
    try {
        const token = req.cookies.Music
        // console.log(token)
        // console.log(req.body.data)
        const id = req.body.data
        // console.log(id) 
        if (token) {
            const decode = jwt.verify(token, key)
            // console.log(decode) 
            const userData = await UserDetails.findById(decode._id)
            console.log(userData)
            if (userData) {
                // const favoriteProduct = { songs: id }
                const data = await UserDetails.findByIdAndUpdate({ _id: userData._id }, { $addToSet: { favoriteProduct: id } })
                console.log(data)
            } else {
                console.log('enter valid credintials')
            }


        } else {
            console.log('login first')
        }

    } catch (error) {
        console.log(error)
    }
}
const favoriteSongs = async (req, res, next) => {
    try {
        const token = req.cookies.Music
        // console.log(token)
        if (token) {
            const decode = jwt.verify(token, key)
            // console.log(decode)
            if (decode) {
                const user = await UserDetails.findById(decode._id)
                // console.log(user)
                const songs = await UserDetails.findOne({ _id: user._id }).populate('favoriteProduct')
                console.log(songs)
                res.status(200).send({
                    status: 200,
                    songs
                })
            } else {
                res.status(201).send({
                    status: 201,
                    msg: "login with valid credintials"
                })
            }
        }
    
    } catch (error) {
        res.status(400).send({
            status: 400,
            error
        })
    }
}



module.exports = {
    Registraion,
    login,
    UserProfile,
    Addtofavorite,
    favoriteSongs,
    
}