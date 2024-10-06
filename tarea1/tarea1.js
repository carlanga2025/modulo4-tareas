// seleccion de elementos por Id

const elementoId = document.getElementById('parrafo');
elementoId.innerHTML = 'Web Development';

// seleccion de elementos por clase

const elementosClase = document.getElementsByClassName('list');
console.log(elementosClase.length);
elementosClase[0].innerHTML = 'React'
elementosClase[1].innerHTML = 'Vue'
elementosClase[2].innerHTML = 'Angular'

// modificando estilos a un elemento 

elementoId.style.background = 'black'
elementoId.style.color = 'white'
elementoId.style.borderRadius = '8px'
elementoId.style.width = '300px'
elementoId.style.textAlign = 'center'

// creando elemento

const parrafoTres = document.createElement('p')
const textoTres = document.createTextNode('JavaScript')
const textoCuatro = document.createElement('p')
textoCuatro.innerHTML = 'Python'

// seleccionar elemento

const elementoPadre = document.querySelector('.cursos')

// agregando elemento

elementoPadre.appendChild(parrafoTres)
parrafoTres.appendChild(textoTres)
elementoPadre.appendChild(textoCuatro)



