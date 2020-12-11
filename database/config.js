const mongoose = require('mongoose');
const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        });
        console.log('DB Online');
    } catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar');
    }
};
module.exports={
    dbConnection
}