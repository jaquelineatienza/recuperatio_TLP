const crtlCine ={};
const Voleto= require('../models/database');
crtlCine.obtenerVoleto = async(req,res)=>{
    try{
    const voletos = await Voleto.findAll({
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
}catch(error){
    return res.status(error.status || 500 ).json({
        message: error.message || 'Error interno del servidor'
    });

}


}