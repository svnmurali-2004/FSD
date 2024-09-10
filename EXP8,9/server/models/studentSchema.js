const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema
({
name:
{
type: String,
required: true
},
rollnumber:{
    type:String,
    required:true
},
section:{
    type:String,
    required:true
},
})
module.exports = mongoose.model('students',studentSchema)