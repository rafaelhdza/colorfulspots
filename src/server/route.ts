import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/business', async (req,res) =>{
    try{
        let business  = await DB.Business.all();
        res.json(business);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;