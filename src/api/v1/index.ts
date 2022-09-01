const api_version ='/api/v1'
import { Express } from 'express'
import data  from './data';
import auth from './auth'

export default (app:Express)=> {
    
    auth(app,api_version);
    data(app,api_version);
}