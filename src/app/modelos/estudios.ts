export class Estudios {
    id? : number;
    nombreEst: string;
    detalleEst: string;
    periodoEst: string;

    constructor(nombreEst: string, detalleEst: string, periodoEst: string){
        this.nombreEst=nombreEst;
        this.detalleEst=detalleEst;
        this.periodoEst=periodoEst;
    }
}
