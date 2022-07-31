export class Experiencialab {
    id? : number;
    nombreExp: string;
    detalleExp: string;
    periodoExp: string;

    constructor(nombreExp: string, detalleExp: string, periodoExp: string){
        this.nombreExp=nombreExp;
        this.detalleExp=detalleExp;
        this.periodoExp=periodoExp;
    }
}
