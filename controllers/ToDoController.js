const toDoModel = require('../models/ToDoModels')

module.exports.getToDo = async (req,res)=>{ 
    const toDo = await toDoModel.find()
    res.send(toDo)
}

module.exports.savetoDo = async(req, res) => {
    const { text } = req.body;
    
    try {
        const data = await toDoModel.create({ text }); // Use await instead of .then()
        console.log("Added Successfully !");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Server error");
    }
}


module.exports.updateToDo = async(req,res)=>{
    const {_id,text} = req.body

    toDoModel.findByIdAndUpdate(_id,{text}).then(()=>res.send('Updated Successfully !')).catch((err)=>console.log(err)
    )
}

module.exports.deleteToDo = async(req,res)=>{
    const {_id} = req.body

    toDoModel.findByIdAndDelete(_id).then(()=>res.send('Deleted Successfully !')).catch((err)=>console.log(err)
    )
}