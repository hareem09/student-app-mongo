const mongodb=require('mongoose');

mongodb.connect('mongodb://localhost:27017/studentdb');

let studentSchema=new mongodb.Schema({
    RollNO:String,
    Name:String,
    Semester:String
})

module.exports = mongodb.model('student',studentSchema);