//requiring the module express
const express=require('express')
const app=express()
const studentModel = require('./studentdata') 

//initialing port
const port=5000


app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})

//adding new student 
app.get('/addstudent',async(req,res)=>{
    let newData= await studentModel.create({
        // RollNO:'001',
        // Name:'Fatima',
        // Semester:'6th'
        // RollNO:'002',
        // Name:'Aimen',
        // Semester:'4th'
        // RollNO:'002',
        // Name:'Faria',
        // Semester:'6th'
        RollNO:"004",
        Name:'Mehveen',
        Semester:'6th'
    }) 
    res.send(newData);
})
//viewing all data
app.get('/student',async(req,res)=>{
    let readData=await studentModel.find()
    res.send(readData)
})
//updating the data
app.get('/updatestudent',async(req,res)=>{
    // let updatedData= await studentModel.findOneAndUpdate({ RollNO:"002"},{RollNO:"003"},{new:true})
    let updatedData= await studentModel.findOneAndUpdate({ Semester:"4th"},{Semester:"6th"},{new:true})
   res.send(updatedData);
})
//deleting data
app.get('/deletestudent',async(req,res)=>{
  let deleteData=await studentModel.findOneAndDelete({Name:'Faria'})
   res.send(deleteData)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  
