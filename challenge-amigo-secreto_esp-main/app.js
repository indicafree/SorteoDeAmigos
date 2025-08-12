/* 
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.  
*/

// array para almacenar los nombres 
  let amigos = [];

// función para agregar amigos, y actualizar la lista
 function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }

        amigos.push(nombre);
        input.value = "";

        mostrarAmigos(); // Siempre actualiza la lista
    }

    function mostrarAmigos() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

// funcion para sortear amigos
  function sortearAmigo() {
        // 1. Validar que haya amigos en el array
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }

        // 2. Generar un índice aleatorio
        const indice = Math.floor(Math.random() * amigos.length);

        // 3. Obtener el nombre sorteado
        const nombreSorteado = amigos[indice];

        // 4. Mostrar el resultado en un alert
        alert(`El amigo sorteado es: ${nombreSorteado}` + " presiona aceptar para reiniciar");
        limpiarTodo(); // Limpia después de mostrar el nombre
    }

    // función para limpiar todo 
    function limpiarTodo() {
        amigos = []; // Vacía el array
        document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista en pantalla
        document.getElementById("nombreAmigo").value = ""; // Limpia el input
    }