import config from '../../config';
import { getAuth } from '../../library/auth';

const NEXT_PUBLIC_Secret= process.env.NEXT_PUBLIC_Secret||"undefined"
const {mongoConfig}=config

const get  = (id:string)=>{
    const userAuth =getAuth(mongoConfig.options.token,NEXT_PUBLIC_Secret);
    mongoConfig.options.user=mongoConfig.options.user?mongoConfig.options.user:(userAuth?.user||"");
    mongoConfig.options.pass=mongoConfig.options.pass?mongoConfig.options.user:(userAuth?.pass||"");
    
    // userAuth?.user
    // userAuth?.pass
    return {
        data:"Hello"+id
    }
}
export default {get}