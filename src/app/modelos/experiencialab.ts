export class Experiencialab {
    id? : number;
    nombreExp: string;
    detalleExp: string;

    constructor(nombreExp: string, detalleExp: string){
        this.nombreExp=nombreExp;
        this.detalleExp=detalleExp;
    }
}
