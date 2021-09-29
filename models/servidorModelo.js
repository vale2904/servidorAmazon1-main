const express = require('express');
const cors = require('cors')
const {conectarBD}=require("../database/conexion.js")
const facturaModelo=require("../models/facturaModelo.js")

class SevidorModelo{


    constructor(){

        this.app = express();
        this.levantarBD();
        this.auxiliares();
        this.llamarRutas();


    }

    levantarSevidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido "+process.env.PUERTO);
        });

    }

    levantarBD(){

        conectarBD();
    }

    auxiliares(){

        this.app.use(express.json())
        this.app.use(cors())
    }

    llamarRutas(){

        this.app.get('/facturas',  async function (req, res) {

            try{

                let facturas = await FacturaModelo.find()
                res.status(200).json({
                    respuesta: "exito",
                    datos: facturas
                })
            }
            catch(error){

                res.status(400).json({
                    respuestas:"error",
                    datos:error

                })}
           
        });

        this.app.post('/facturas/nuevo',async function (req, res) {
            let datosFactura=req.body;

            try{

                let factura=new facturaModelo(datosFactura);
                await factura.save();
                res.status(200).json({
                    respuestas:"exito",
                    datos:factura
                })

            }
            catch(error){

                res.status(400).json({
                    respuestas:"error",
                    datos:error

                })

            }
        });

        this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });
        
        this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

    }





}

module.exports=SevidorModelo;