import { Express,Request,Response } from 'express';
import {genToken} from '../../controllers/authLogin'

//import  {AXAPI:axapi} from '../../../controllers/dotnetconector
export default (app:Express,api_version:string)=> {
    
    app.post(`${api_version}/token`,async (req:Request,res:Response) => {
  
  
        const token = await genToken(
            req.body.username,
            req.body.password
        );
        if(token)
            res.json(token);
        else
            res.sendStatus(401);
    });


     
       
};