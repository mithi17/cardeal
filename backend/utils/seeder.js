const datas = require('../data/maid.json');
const maids = require('../models/maidModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

dotenv.config({path:'backend/config/config.env'});
connectDatabase();



const seedmaids= async () =>{
    try{

        await maids.deleteMany();
        console.log('All deleted');
        await maids.insertMany(datas);
        console.log('All data Added');

    }catch(error){
        console.log(error.message);
    }

}

seedmaids();