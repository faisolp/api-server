import express, { Request, Response } from 'express';
import cors from 'cors';
import timeout from 'connect-timeout';
import compression from 'compression';
import api from './api';
//require('./App/Routes')(app);

export default  () =>{
    const app = express();

    app.use(timeout("220000"));
    app.use(haltOnTimedout);
    app.use(compression());
    function haltOnTimedout(req:Request, res:Response, next:any){
        if (!req.timedout) next();
    }
    app.use(express.json()); //Used to parse JSON bodies
    app.use(express.urlencoded({ extended: true }))
    app.use(cors());
    api(app);

    const PORT = process.env.PORT || 4082;
    const server = app.listen(PORT, function () {
        console.log(`Server running at : ${PORT}/ Mode ${process.env.NODE_ENV} ` );
    });
}
