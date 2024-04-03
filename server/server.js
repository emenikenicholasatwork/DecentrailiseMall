const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.server_port



const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
})

connection.connect((err)=>{
    if (err) {
        console.log('Error connecting to Mysql database: ',err)
        return
    }
    app.listen(port, err=>{
        if (err) throw err
        console.log(`Server listen in port ${port}`)
    })
})

