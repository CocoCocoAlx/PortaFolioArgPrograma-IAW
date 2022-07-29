export class Estudios {
    id? : number;
    nombreEst: string;
    detalleEst: string;

    constructor(nombreEst: string, detalleEst: string){
        this.nombreEst=nombreEst;
        this.detalleEst=detalleEst;
    }
}
