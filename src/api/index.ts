import { Express } from 'express';
import api_v1_route from './v1/index'
export default (app:Express)=>{

    api_v1_route(app);
}