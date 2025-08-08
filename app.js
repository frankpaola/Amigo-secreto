// Paso 1: Crear un array para almacenar los nombres de los amigos
let amigos = [];

// Este array almacenará todos los nombres ingresados por el usuario
// Inicialmente está vacío y se llenará conforme el usuario agregue nombres

// Paso 2: Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const campoTexto = document.getElementById('amigo');
    const nombreAmigo = campoTexto.value;
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si el campo está vacío
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    campoTexto.value = '';
    
    // Paso 3: Llamar a la función para actualizar la lista visual
    actualizarListaAmigos();
    
    // Mensaje en consola para verificar que funciona (opcional para debug)
    console.log('Amigos actuales:', amigos);
}

// Paso 3: Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente
    lista.innerHTML = "";
    
    // 3. Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista
        // Crear un nuevo elemento de lista para cada amigo
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar el elemento li a la lista ul
        lista.appendChild(elementoLista);
    }
}

// Paso 4: Implementa una función para sortear los amigos
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Por favor, agregue al menos un nombre.');
        return; // Salir de la función si no hay amigos
    }
    
    // 2. Generar un índice aleatorio
    // Math.random() genera un número entre 0 y 1
    // Multiplicamos por amigos.length para obtener un rango de 0 a amigos.length
    // Math.floor() redondea hacia abajo para obtener un índice entero válido
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
    
    // Mensaje en consola para verificar el sorteo (opcional para debug)
    console.log(`Amigo sorteado: ${amigoSorteado} (índice: ${indiceAleatorio})`);
}
