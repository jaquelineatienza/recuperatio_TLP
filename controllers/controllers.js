const crtlCine ={};
const Voleto= require('../models/database');
crtlCine.obtenerVoleto = async(req,res)=>{
    const {id} = req.pararms;
    try{
    const voletos = await Voleto.findByPk(id)
  
       
    
    if (!voletos) {
        throw ({
            status: 404,
            message: 'No hay reserva de voletos '

        })
    }
    let voletoCompleto= voletos.toJSON();
    return res.json(voletoCompleto);
}catch(error){
    return res.status(error.status || 500 ).json({
        message: error.message || 'Error interno del servidor'
    });

}
}
crtlCine.crearVoleto = async (req, res) => {
    const { nombre, apellido,codigo,pelicula,fechaEstreno,duracion,horario,cantidadButacas} = req.body;

    console.log('req.body')
    console.log(req.body)

    try {
        const voletos = await Voleto.create({
            nombre,
            apellido,
            fechaEstreno,
            pelicula,
            duracion,
            cantidadButacas,
            horario,
            codigo
        });

        if (!voletos) {
            throw ({
                status: 400,
                message: 'No se pudo crear el voleto'
            })
        }

        return res.json(voletos);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
};
// Ctrl para actualizar una tarea
crtlCine.actualizarVoleto = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido,codigo,fechaEstreno,pelicula,duracion,cantidadButacas } = req.body;
    console.log('Datos recibidos:', req.body);
    console.log('ID de reserva:', req.params.id);
    try {
        const VoletoActualizado = await Voleto.update({
            nombre,
            apellido,
            fechaEstreno,
            cantidadButacas,
           horario,
           pelicula, 
           duracion,
            codigo
        }, {
            where: {
                id:req.params.id,
            }
        });

        if (!VoletoActualizado) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la Reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}
crtlCine.eliminarVoleto = async (req, res) => {
    const { id } = req.params;

    try {
        const voletoEliminado = await Voleto.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!voletoEliminado) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({voletoEliminado, message: 'Voleto eliminado correctamente eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = crtlCine;