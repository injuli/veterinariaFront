export class Historial {
    id?: number;
    nombre: string;
    apellido: string;
    cedula: number;
    tipo: string;
    genero: string;

    constructor(nombre: string, apellido: string, cedula: number, tipo: string, genero: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.tipo = tipo;
        this.genero = genero;
    }

}


