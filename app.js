// Franco Jorquera
//Consumo de API y visualización de datos por consola
//Se muestra a propósito el contenido del Json
//

//Creación de la clase para recibir los datos de la API
class servicio{
    constructor(){
        let req = new XMLHttpRequest();
        const url = "https://jsonplaceholder.typicode.com/users";
        req.open("GET", url, false);
        req.send();
        this.data = JSON.parse(req.response);
        console.log(this.data);
    }
    //muestra todos los nombres de los usuarios
    listarNombres(){
        this.data.map(usuario => console.log(usuario.name));
    }
    //solicita un nombre y entrega datos básicos del usuario
    //En caso de no existir solo no entrega información (Se debe ingresar nombre tal cual como entrega la API)
    informacionBasica(){
        let nombre = prompt("Ingrese nombre");
        this.data.map(usuario => {if (usuario.name == nombre){
                console.log(`${usuario.name}, usuario: ${usuario.username}, email: ${usuario.email}`);
            }
        });
    }
    //solicita un nombre y entrega datos de dirección del usuario
    direccion(){
        let nombre = prompt("Ingrese nombre");
        this.data.map(usuario => {if (usuario.name == nombre){
                console.log(`${usuario.name}, calle: ${usuario.address.street}, suite: ${usuario.address.suite}, city: ${usuario.address.city}, zipcode: ${usuario.address.zipcode}`);
            }
        });
    }
    //solicita un nombre y entrega datos avanzados del usuario
    informacionAvanzada(){
        let nombre = prompt("Ingrese nombre");
        this.data.map(usuario => {if (usuario.name == nombre){
                console.log(`${usuario.name}, teléfono: ${usuario.phone}, sitio web: ${usuario.website}, compañía: ${usuario.company.name}, eslogan: ${usuario.company.catchPhrase}, bs: ${usuario.company.bs}`);
            }
        });
    }
    //muestra compañías y eslogans
    companias(){
        this.data.map(usuario => console.log(`${usuario.company.name} ${usuario.company.catchPhrase}`));
    }
    //muestra lista ordenada de usuarios
    nombresOrdenados(){
        let nombres = this.data.map(usuario => usuario.name);
        let nombresOrd = nombres.sort();
        nombresOrd.map(usuario => console.log(usuario));
    }
}

//Se declara el objeto de clase servicio
let serv = new servicio();

