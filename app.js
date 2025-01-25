// Creamos un array el cual almacenará la data ingresada por el usuario en el input
const list_of_names = [];

// Realizamos un querySelect para obtener la data ingresada desde el elemento input del index.html
const input = document.querySelector('input');

// Cada vez que se agregue data al array list_of_names, dentro del elemento <ul> con clase 'name-list' se creará un elemento <li> con el nombre ingresado en el index.html
function agregarAmigo() {
    // Sin embargo, previo a añadir la data al array list_of_names, verificamos que la data a ser añadida no sea un string vacío
    if (input.value === '') {
        alert('Por favor, ingrese un nombre válido');
    } else {
        // Añadimos la data ingresada al array list_of_names
        list_of_names.push(input.value);
        input.value = '';
        
        // Mostramos la almacenada en el array list_of_names
        const ul = document.querySelector('.name-list');
        ul.innerHTML = '';
        list_of_names.forEach((name) => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
    }
}

// Definimos una función la cual presionar el botón con la clase 'button-draw' seleccionará un nombre aleatorio del array list_of_names
function sortearAmigo() {
    // Previo a seleccionar un nombre aleatorio, verificamos que en el array list_of_names exista al menos un nombre
    if (list_of_names.length === 0) {
        alert('Por favor, ingrese al menos el nombre de uno de sus amigos');
        return;
    }
    else {
        const random = Math.floor(Math.random() * list_of_names.length);
        // Eliminamos los elementos <li> que se encuentren dentro del elemento <ul> con la clase 'name-list'
        let ul; 
        ul = document.querySelector('.name-list');
        ul.innerHTML = '';
    
        // Una vez seleccionado el nombre aleatorio hacemos un querySelect para obtener el elemento <ul> con la clase 'result-list' en la cual insertaremos aquel nombre seleccionado aleatoriamente
        ul = document.querySelector('.result-list');
        ul.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `El amigo secreto sorteado es: ${list_of_names[random]}`;
        ul.appendChild(li);    
    }
}
