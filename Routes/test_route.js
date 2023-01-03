const express = require('express');
const router = express.Router();
const Registration = require('../Models/test_model');

//Insert Data
router.post('/AddData', async(req, res) => {
    console.log(req.body);
    const add = new Registration({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        course: req.body.course
    })
    const data = await add.save();
    return res.status(201).json(data);
})

//Display Data
router.get('/DispData', async(req, res) => {
    const data = await Registration.find();
    return res.status(200).json(data);
})

//Delete Data
router.delete('/DelData/:id', async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const del = await Registration.findByIdAndDelete(id);
    res.send(`Data delete which Name is ${del.name}`);
})

//Search one record
router.get('/SearchData/:id', async(req, res) => {
    const data = await Registration.findById(req.params.id);
    return res.status(200).json(data);
})

// Update Data
// router.put('/UpdateData/:id', async(req, res) => {
//     const id = req.params.id;
//     const update = req.body;
//     const options = {new : true};
//     console.log(update);
//     const result = await Registration.findByIdAndUpdate(id, update, options);
//     return res.json(result);
// })

router.put("/update/:id", async(req, res) => {
    const updata = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(updata);
})

//Login
router.post("/login", async(req, res) => {
    if (req.body.name && req.body.password) {
        const loginchk = await Registration.findOne(req.body).select("-password")
        if (loginchk)
            res.send(loginchk)
        else
            res.send({ Result: "Invalid name ans password" })
    } else
        res.send({ Result: "Enter name and password" })
})

//Search Records
router.get("/search/:key", async(req, res) => {
    const data = await Registration.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { phone: { $regex: req.params.key } }
        ]
    })
    return res.json(data)
})

module.exports = router;