const contenedorDoctores = document.getElementById('cont-doctores');
const mostrasCirujanos = document.getElementById('prof2')
const mostrarPediatras = document.getElementById('prof1');
const mostrarDermatologos = document.getElementById ('prof3')
const mostrarOftamogolo = document.getElementById ('prof4')
const mostrarDentistas = document.getElementById ('prof5')
const mostrarOtorrinos = document.getElementById ('prof6')

let catPediatras = [
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

	{
		id: 4,
		nombre: "Don Tu casa",
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

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Pediatria",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
];

let catCirujanos = [
    {
        id: 1,
        nombre: "Don yeyito",
        especialista: "Pediatria",
        edad: "0 a 9 años",
        horario: "9hs a 19hs",
    },

    {
        id: 2,
        nombre: "Don pepe",
        especialista: "Pediatria",
        edad: "0 a 9 años",
        horario: "9hs a 19hs",
    },

    {
        id: 3,
        nombre: "Don merqui",
        especialista: "Pediatria",
        edad: "0 a 9 años",
        horario: "9hs a 19hs",
    },

    {
        id: 4,
        nombre: "Don telechea",
        especialista: "Pediatria",
        edad: "0 a 9 años",
        horario: "9hs a 19hs",
    },
];

let dermatologos = [
	{
		id: 1,
		nombre: "Don Pepito",
		especialista: "Dermatologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 2,
		nombre: "Don jose",
		especialista: "Dermatologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 3,
		nombre: "Don Pase",
		especialista: "Dermatologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Dermatologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
]

let oftamologo = [
	{
		id: 1,
		nombre: "Don Pepito",
		especialista: "Oftamologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 2,
		nombre: "Don jose",
		especialista: "Oftamologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 3,
		nombre: "Don Pase",
		especialista: "Oftamologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Oftamologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
]

let dentistas = [
	{
		id: 1,
		nombre: "Don Pepito",
		especialista: "Odontologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 2,
		nombre: "Don jose",
		especialista: "Odontologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 3,
		nombre: "Don Pase",
		especialista: "Odontologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Odontologia",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
]

let otorrinos = [
	{
		id: 1,
		nombre: "Don Pepito",
		especialista: "Otorrinolaringología",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 2,
		nombre: "Don jose",
		especialista: "Otorrinolaringología",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 3,
		nombre: "Don Pase",
		especialista: "Otorrinolaringología",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},

	{
		id: 4,
		nombre: "Don Tu casa",
		especialista: "Otorrinolaringología",
		edad: "0 a 9 años",
		horario: "9hs a 19hs",
	},
]


dermatologos.forEach((dermatologos) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${dermatologos.nombre}</h3>
       	<p>${dermatologos.especialista}</p>
      	<p>Edades: ${dermatologos.edad}</p>
        <p>Horario: ${dermatologos.horario}</p>
        <button id="agregar${dermatologos.id}a" class="btn btn--pediatras" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrarDermatologos.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
		
		
	})


oftamologo.forEach((oftamologo) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${oftamologo.nombre}</h3>
       	<p>${oftamologo.especialista}</p>
      	<p>Edades: ${oftamologo.edad}</p>
        <p>Horario: ${oftamologo.horario}</p>
        <button id="agregar${oftamologo.id}" class="btn" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrarOftamogolo.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
		
		
	})


dentistas.forEach(( dentistas) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${dentistas.nombre}</h3>
       	<p>${ dentistas.especialista}</p>
      	<p>Edades: ${dentistas.edad}</p>
        <p>Horario: ${dentistas.horario}</p>
        <button id="agregar${dentistas.id}" class="btn" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrarDentistas.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
		
		
	})
	

otorrinos.forEach((otorrinos) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${otorrinos.nombre}</h3>
       	<p>${otorrinos.especialista}</p>
      	<p>Edades: ${otorrinos.edad}</p>
        <p>Horario: ${otorrinos.horario}</p>
        <button id="agregar${otorrinos.id}" class="btn" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrarOtorrinos.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
		
		
	})
catPediatras.forEach((pediatra) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${pediatra.nombre}</h3>
       	<p>${pediatra.especialista}</p>
      	<p>Edades: ${pediatra.edad}</p>
        <p>Horario: ${pediatra.horario}</p>
        <button id="agregar${pediatra.id}" class="btn" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrarPediatras.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
	});


	

catCirujanos.forEach((cirujanos) => {
		const div = document.createElement('div')
		div.classList.add('doctores')
		div.innerHTML = `
        <h3>${cirujanos.nombre}</h3>
       	<p>${cirujanos.especialista}</p>
      	<p>Edades: ${cirujanos.edad}</p>
        <p>Horario: ${cirujanos.horario}</p>
        <button id="agregar${cirujanos.id}" class="btn" onClick="goTurnos();">TURNOS</button>
		`
		
		mostrasCirujanos.addEventListener('click', () => {
			contenedorDoctores.appendChild(div)
		})
	})


