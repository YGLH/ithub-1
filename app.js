const express = require('express')

const app = express()

app.get('/',(req,res) => {
	res.send('hello worid')
})

app.listen(3000,() => console.log('running 3000...'))