export interface IEmployee {
    id: number;
    name:string;
    surname:string;
    position:'Разработчик' | 'Менеджер';
    companyId:number;
}