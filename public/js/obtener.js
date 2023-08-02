const listadoTareas = document.querySelector('#voletos');

const obtenerVoletos = async () => {
    const res = await fetch('http://localhost:3005/api/cine');

    if (res.status === 404) {
        return [];
    }

    const data = await res.json();
    return data;
};

const eliminarVoleto = async (id) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Estás por eliminar la Tarea del sistema.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Estoy seguro",
        cancelButtonText: "Cancelar",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const res = await fetch(`/api/cine/${id}`, {
                    method: "DELETE",
                });

                const data = await res.json();

                Swal.fire({
                    icon: "success",
                    title: "Tarea eliminada",
                    text: data.message,
                });

                setTimeout(() => {
                    window.location.reload();
                }, 2200);
            } catch (error) {
                console.log(error);
             
            }
        }
    });
};

const mostrarTareas = (voletos) => {
    // Si no hay tareas, mostrar un mensaje
    if (voletos.length === 0) {
        listadoTareas.innerHTML = `
            <tr>
                <td colspan="7" class="text-center">No hay reservas registradas</td>
            </tr>
        `;
        return;
    }

    listadoTareas.innerHTML = '';

    voletos.forEach(tarea => {
        listadoTareas.innerHTML += `
            <tr>
                <td>${tarea.nombre}</td>
                <td>${tarea.apellido}</td>
                <td>${tarea.fechaEstreno}</td>
                <td>${tarea.pelicula}</td>
               
                <td>${tarea.precio}</td>
               
                <td>${tarea.cantidadButacas}</td>
                <td>${tarea.duracion}</td>
                <td>${tarea.horario}</td>
                
                <td>${tarea.codigo}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm eliminar-informe" data-id="${tarea.id}">Eliminar</button>
                    <a href="http://localhost:3005/cine/editar/${tarea.id}" class="btn btn-warning btn-sm">Editar</a>
                </td>
            </tr>
        `;
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const voletos = await obtenerVoletos();
        console.log(voletos)
       
        mostrarTareas(voletos);

        const deleteButtons = document.querySelectorAll('.eliminar-informe');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                eliminarVoleto(id); // Aquí se corrige el nombre de la función
            });
        });
    } catch (error) {
        console.log({ error });

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        });
    }
});

