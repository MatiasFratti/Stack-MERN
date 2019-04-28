const express = require('express');
const router = express.Router();

const User = require('../model/users');
const Task = require('../model/Task');


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
            console.log('datos guardados');
        }
    });
    console.log(task);
    res.json({status:'datos guardados'});

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
    await Task.findOneAndDelete(req.params.id);
    res.json('Delete');
});
module.exports = router;