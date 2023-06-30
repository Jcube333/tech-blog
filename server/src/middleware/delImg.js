import fs from "fs";
import path,{dirname} from "path";
import { fileURLToPath } from 'url';
import {Post} from "../models/post.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const delImg=async(req,res,next)=>{

    let img=""

    if(req.path=="/me")
    { 
        img = req.user.profilePic
    }
    else{

        try{
       const post=await Post.findOne({
       _id: req.params.id,
       author: req.user._id,
    });
    

    img=post.banner;
    req.post=post;
}catch(e){
    return res.status(404).send(e);
}
    }


    const imagePath = path.join(__dirname, '../../images/'+img);
    
    
    if(img!="")
    {
    try{
          fs.unlink(imagePath,(e)=>{
            
          });
         
    }catch(e){
        console.log(e);
    }
   }

   next();
    

}