const crtlCine ={};
const Voleto= require('../models/cine');
crtlCine.obtenerVoleto = async(req,res)=>{
    try{
    const voletos = await cine.findAll({
        where: {
            estado: true,
        }
    });

    if (!voletos || voletos.length === 0) {
        throw ({
            status: 404,
            message: 'No hay reserva de voletos '

        })
    }
    return res.json(voletos);
}


}