const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')
const url = 'mongodb+srv://fsdlab:12345@cluster0.i63u1ey.mongodb.net/CBIT?retryWrites=true&w=majority&appName=Cluster0'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const studentRouter = require('./routes/student')
app.use('/students',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})