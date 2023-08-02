const nuevaTarea = document.querySelector('#nuevaTarea')
nuevaTarea.addEventListener('submit',async(e)=>{
        e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaEstreno = document.getElementById('fechaEstreno').value;
    const cantidadButacas = document.getElementById('cantidadButacas').value;
    const horario = document.getElementById('horario').value;
    const pelicula = document.getElementById('peliculas').value
    const codigo = document.getElementById('codigo').value;
    const precio = document.getElementById('precio').value

      

    if (!nombre || !apellido ||!horario||!fechaEstreno||!cantidadButacas||!pelicula|| !codigo) {
        Swal.fire({
            icon: 'error',
            title: 'Campos requeridos',
            text: 'Por favor, completa todos los campos requeridos.'
        });
        return;
    }

    const nuevoVoleto ={
        nombre,
        apellido,
        pelicula,
        fechaEstreno,
        precio,
        horario,
        cantidadButacas,
        codigo
    };

    try{
        const res = await fetch(`http://localhost:3005/api/cine/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(nuevoVoleto)

        });
        const data = await res.json();
        console.log({data});

        Swal.fire({
            icon:'success',
            title:'voleto creada',
            text:'el voleto fue creado correctamente'
        })
        setTimeout(()=>{
            window.location.href ='/cine';
        },2000);

      
    }catch(error){
        console.log(error);
        Swal.fire({
            icon:'error',
            title:'error',
            text:error.message
        })
    }
});
