const mongoose=require("mongoose");

async function conectarBD(){

    try{

        await mongoose.connect(process.env.BASEDEDATOS);
        console.log("exito conectados a la base de datos ");

    }catch(error){

        console.log(error);

    }
}
module.exports={conectarBD}