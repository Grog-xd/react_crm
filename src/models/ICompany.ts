import { IEmployee } from "./IEmployee";

export interface ICompany{
    id:number;
    name:string;
    empoyers: IEmployee[];
}