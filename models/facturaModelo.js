const{model,Schema}=require("mongoose");

const facturaModelo=Schema({

    producto:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    peso:{
        type:String,
        require:true
    },
    fotos:{
        type:String,
        require:true
    }
});

module.exports=model("factura",facturaModelo);