const express = require('express');
const router = express.Router();

const User = require('../model/users');
const Task = require('../model/Task');
const State = require('../model/State');

router.post('/validation',async(req,res)=>{
    new User();
    console.log(req.body.name,'  ',req.body.pass);
    const user = await User.find(function(err,usu){
        
    });
    console.log(user[0].name,'  ',user[0].pass)
    if(user[0].name==req.body.name && user[0].pass == req.body.pass){
        console.log('enter');
        res.json(user);
    }
    else{
        console.log('afuera')
        res.json('error');
    }

});

router.get('/state',async(req,res)=>{
    new State();
    const state = await State.find();
    console.log(state);
    res.json(state);
});

router.get('/', async(req,res)=>{
   
    new Task()
    const task = await Task.find(function(err,user){
        
    });
    res.json(task);
});
router.post('/',async(req,res)=>{
    console.log(req.body);
    const task = new Task(req.body);
    await task.save(function(err){
        if(err) console.log('no se pudieron guardar los datos');
        else{
            res.json({status:'datos guardados'});
        }
    });
    console.log(task);
    

});
router.get('/:id',async (req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);

});
router.put('/:id',async(req,res)=>{
    console.log(req.params.id);
    const {title, description} = req.body;
    const update_task = {title, description};
    const id = req.params.id;
    
    await Task.findByIdAndUpdate(id,update_task);
    res.json('actualizado');
});
router.delete('/:id',async(req,res)=>{
    console.log(req.params.id);
    const task = await Task.findOneAndRemove({_id:req.params.id});
    res.json('Delete');
    console.log(task);
});
module.exports = router;