import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEmployee } from "../../models/IEmployee"

interface EmployeeState {
    employees: IEmployee[],
    activeEmployeeId: number,
    employeeCanBeDeleted: number[],
}

const initialState: EmployeeState = {
    employees: [
        {id:1, name:'Дмитрий', surname:'Голов', position:"Разработчик", companyId:1},
        {id:2, name:'Иван', surname:'Иванов', position:'Менеджер', companyId:1},
        {id:3, name:'Сотрудник', surname:'Сотрудник', position:'Разработчик', companyId:1},
    ],
    activeEmployeeId: 0,
    employeeCanBeDeleted: [],
}

export const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{
        addEmployee: (state, action: PayloadAction<IEmployee>) => {
            state.employees = [...state.employees, action.payload]
        },
        deleteEmploees: (state) => {
            state.employees = state.employees.filter((employee) => !state.employeeCanBeDeleted.includes(employee.id))
            state.employeeCanBeDeleted = []
        },
        changeActiveEmployeeId: (state, action: PayloadAction<number>) => {
            state.activeEmployeeId = action.payload
        },
        checkboxHandler: (state, action: PayloadAction<number>) => {            
            state.employeeCanBeDeleted.includes(action.payload) 
                ? state.employeeCanBeDeleted = state.employeeCanBeDeleted.filter(elem => elem != action.payload) 
                : state.employeeCanBeDeleted = [...state.employeeCanBeDeleted, action.payload]
        },
        multiEmployeeCheckboxHandler: (state, action: PayloadAction<{status:boolean, companyId:number}>) => {
            action.payload.status
                ? state.employeeCanBeDeleted = state.employees.map((employee) => action.payload.companyId === employee.companyId  && employee.id )
                : state.employeeCanBeDeleted = []
        },
        changeEmployeeNameHandler: (state, action: PayloadAction<{id:number, name:string}>) => {
            state.employees = state.employees.map((employee) => employee.id === action.payload.id ? 
            {
                ...employee,
                name: action.payload.name
            } 
            :  employee)
        },
        changeEmployeeSurNameHandler: (state, action: PayloadAction<{id:number, surname:string}>) => {
            state.employees = state.employees.map((employee) => employee.id === action.payload.id ? 
            {
                ...employee,
                surname: action.payload.surname
            } 
            :  employee)
        },
        changeEmployeePositionHandler: (state, action: PayloadAction<{id:number, position:string}>) => {
            state.employees = state.employees.map((employee) => employee.id === action.payload.id ? 
            {
                ...employee,
                position: action.payload.position
            } 
            :  employee)
        },
        clearCanBeDeletedArray: (state) => {
            state.employeeCanBeDeleted = []
        },
    }
})

export default employeeSlice.reducer