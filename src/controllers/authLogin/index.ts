import { Request, Response } from 'express';
import  jwt from 'jsonwebtoken';
import config from '../../config';
const NEXT_PUBLIC_Secret= process.env.NEXT_PUBLIC_Secret||"undefined"




const authToken=(req:Request , res:Response, next:any)=> {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const auth =config.AUTH; //process.env
   

    if (token == null && auth ) 
      return res.sendStatus(401)
  
    //jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    jwt.verify(token ?token:"", NEXT_PUBLIC_Secret, (err:any, user:any) => {
        
  
      if (auth && err) {
          console.log(err)
          return res.sendStatus(403)
          
        }
  
      //req = user
  
      next()
    })
  }

const genToken= async (username:string,pass:string)=> {
    try {
    
        if(true) {  // Check in member
          
              return await jwt.sign({username,pass},NEXT_PUBLIC_Secret); //, { expiresIn: '1800s' });
      } 
    } catch(e){
      console.log(`genToken:${e}`);
    }
    return null;

    
  }

export  {
   
    authToken,
    genToken
   
};
