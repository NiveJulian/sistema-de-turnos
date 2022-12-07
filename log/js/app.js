const mostrarPediatras = document.getElementById('prof1')
const contenedorDoctores = document.getElementById('cont-doctores')

let pediatras = [
	{
		id: 1,
		nombre: "Don Pepito",
		especialista: "Pediatria",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 2,
		nombre: "Don jose",
		especialista: "Pediatria",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 3,
		nombre: "Don Pase",
		especialista: "Pediatria",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Pediatria",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
]


pediatras.forEach((pediatra) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${pediatra.nombre}</h3>
       	<p>${pediatra.especialista}</p>
      	<p>Edades: ${pediatra.edad}</p>
        <p>Horario: ${pediatra.horario}</p>
        <button id="agregar${pediatra.id}" class="btn">TURNOS</button>
		`
		
		mostrarPediatras.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
		
		
	})

