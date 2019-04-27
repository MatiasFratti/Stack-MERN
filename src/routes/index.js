const express = require('express');
const router = express.Router();

const User = require('../model/users');

router.get('/', async(req,res)=>{
    new User()
    const user = await User.find(function(err,user){
        console.log(user);
    });
    res.json(user);
});
router.post('/',async(req,res)=>{
    console.log(req.body);
    const user = new User(req.body);
    await user.save(function(err){
        if(err) console.log('no se pudieron guardar los datos');
        else{
            console.log('datos guardados');
        }
    });
    console.log(user);
    res.json('recibido');

});
router.get('/:id',async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);

});
router.put('/:id',async(req,res)=>{
    console.log(req.params.id);
    const {name, pass} = req.body;
    const update_user = {name, pass}
    const id = req.params.id;
    
    await User.findByIdAndUpdate(id,update_user);
    res.json('actualizado');
});
router.delete('/:id',async(req,res)=>{
    await User.findOneAndDelete(req.params.id);
    res.json('Delete');
});
module.exports = router;