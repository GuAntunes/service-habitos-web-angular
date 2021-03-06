import { Meta } from './meta';

export class Objetivo {

    public id?: number;
    public nome?: string;
    public descricao?: string;
    public dataInicio?: string;
    public dataConclusao?: string;
    public metas?: Meta[];

    constructor() { }
}
