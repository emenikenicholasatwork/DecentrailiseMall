const express = require('express')

const app = express()


app.listen(8080, err=>{
    if (err) throw err

    console.log('Server listen in port 8080')
})