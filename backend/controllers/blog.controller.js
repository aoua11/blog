const blog = require('../models/blog');

/*-----------------------------*/
exports.index = async(req , res)=>{
    const article = await blog.find();
    return res.json(article)
};



/*-----------------------------*/
exports.store = async(req , res)=>{
    const data = {
        title : req.body.title ,
        author : req.body.author ,
        date : req.body.date ,
        content : req.body.content ,
        image : req.file.path , 
    };
    const article = await blog.create(data);
    return res.json(article)
};



/*-----------------------------*/
exports.show = async(req , res)=>{
    const article = await blog.findById(req.params.id);
    return article ? res.json(article) : res.status(404).json({message  :'not found'});
}

/*-----------------------------*/
exports.ubdate= async(req , res)=>{
    const data = {
        title : req.body.title ,
        author : req.body.author ,
        date : req.body.date ,
        content : req.body.content ,
        image : req.file.path , 
    }
    const article = await blog.findByIdAndUpdate(req.params.id  , data , {new : true});
    return article ? res.json(article)  : res.status(404).json({message : 'not found'});
};



/*-----------------------------*/
exports.delete = async(req , res)=>{
    const article = await blog.findByIdAndDelete(req.params.is);
    return article ? res.json({messgae  : "delete succes"})  : res.status(404).json({message : 'not found'});
}; 

