import postMessage from '../models/postMessage.js';

export const getPost = async(req,res)=>{
    try{
        const postMessage = await postMessage.find();
            console.log(postMessage);
            res.status(200).json(postMessage);
    }
        catch(error){
            res.status(400).json({message: error.Message});
        }
    }

export const createPost =(req,res)=>{
    res.send('Post Creation');
}