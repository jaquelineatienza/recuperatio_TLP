const formEditar = document.getElementById('formEditar');
// Escuchar el evento submit
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Enviando formulario...");
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaEstreno = document.getElementById('fechaEstreno').value;
    const cantidadButacas = document.getElementById('cantidadButacas').value;
    const horario = document.getElementById('horario').value;
    const pelicula = document.getElementById('peliculas').value
    const codigo = document.getElementById('codigo').value
    const precio = document.getElementById('precio').value

    const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
    
    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        codigo: codigo.value,
        peliculas:pelicula.value,
        fechaEstreno:fechaEstreno.value,
        horario:horario.value,
        cantidadButacas:cantidadButacas.value,
        precio:precio.value
    };
    try {
        const response = await fetch(`http://localhost:3005/api/cine/editar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const respToJson = await response.json();
        
        if (response.status !== 201 && response.status !== 200) {
            const errorMessage = respToJson && respToJson.message ? respToJson.message : 'Hubo un error al procesar la solicitud';
            Swal.fire({
                icon: 'error',
                title: errorMessage,
            });
            return;
        }
    
        Swal.fire({
            icon: 'success',
            title: 'Reserva actualizada con éxito',
            text: respToJson && respToJson.reservaActualizada ? respToJson.reservaActualizada.message : 'Reserva actualizada con éxito',
        });
    
        console.log(respToJson);
        setTimeout(() => {
            window.location.href = '/cine';
        }, 2000);
    
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Ha ocurrido un error al enviar el formulario'
        });
    }
});