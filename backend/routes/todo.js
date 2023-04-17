const UserAuth = require('../models/user');
const User=require('../models/passportUser-model')

const router=require('express').Router()


// router.post('/add',async(req,res)=>{
//     const {fullname,description}=req.body;
//     try{
//         const todo=await Todo.create({fullname,description}).then((data)=>{
//             console.log('Added Successfuly...')
//             console.log(data)
//             res.send(todo)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
   
// })

router.get('/get',async(req,res)=>{
    try{
        const tasks= await User.find();
        res.send(tasks)
    }
    catch(error){
        console.log(error)
    }
})

// router.get('/getuser', async(req,res)=>{
//     try{
//         const getuser=await User
//     }
// })

router.put('/:id',async(req,res)=>{
    const {id}= req.params
    try{
        const columns=await Todo.findOneAndUpdate({_id:id},{
            ...req.body
        })
        res.send(columns)
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/:id',async(req,res)=>{
    const {id}= req.params
    try{
        const columns=await Todo.findOneAndDelete({_id:id},{
            ...req.body
        })
        res.status(202).json(columns)
    }
    catch(error){
        console.log(error)
    }
})

module.exports=router