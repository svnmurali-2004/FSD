const express=require("express")
const app=express("express")
const jwt=require("jsonwebtoken")
const cors=require("cors")
const {authmiddleware} =require("./middlewares/authmiddleware")

const posts=[
    {name:"CBIT",
        msg:"welcome to cbit"
    },{
        name:"MGIT",
        msg:"welcome to mgit"
    }
]
app.use(cors())
app.use(express.json())

app.post("/login",async(req,res)=>{
    const username=req.body.username 
    if(!username){
        return res.send({ok:false,msg:"username not found"})
    }
    const accesstoken=await jwt.sign({username:username},process.env.secret,{expiresIn:"1d"})
    res.send({accesstoken})
})

app.post('/post',authmiddleware,async(req,res)=>{
    try{
        const {name}=req.body
        res.send({ok:true,result:posts.find(item=>item.name==name)})
    }catch(err){
        console.log(err)
    }
})

app.listen(5000,()=>{
    console.log("server started")
})