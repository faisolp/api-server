//import dayjs from 'dayjs';
import { Express,Request,Response } from 'express';
import data from '../../controllers/data';

import {authToken} from '../../controllers/authLogin'

export default (app:Express,api_version:string)=> {
    
    app.get(`${api_version}/data`,
        authToken,
        async(req:Request,res:Response)=>{
        
           
        //let parm ={ResponsibleSales:req.query.UserId}
        let ret = await data.get(String(req.query.id)||"")
        
        
        res.json( ret);
    })

      
}