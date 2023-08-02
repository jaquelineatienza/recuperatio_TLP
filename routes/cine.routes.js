const express = require('express');

const router= express.Router();
const {eliminarVoleto,actualizarVoleto,obtenerVoleto,crearVoleto}= require('../controllers/controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//vista General
router.get('/cine',(req,res)=>{
    res.render('index')
})
//Vista Crear

router.get('/cine/create',(req,res)=>{
    res.render('crear')
})
//vista editar
router.get('/cine/editar/:id', (req, res) => {
    res.render('editar', { id: req.params.id });
});








// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/cine/', obtenerVoleto);
// Formulario para crear una reserva

router.post('/api/cine/create',  crearVoleto);
// Formulario para actualizar una reserva

router.put('/api/cine/editar/:id', actualizarVoleto);
// Formulario para eliminar una reserva 

router.delete('/api/cine/:id', eliminarVoleto);

 
 
 module.exports = router;