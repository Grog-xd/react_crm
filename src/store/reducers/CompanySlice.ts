import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICompany } from "../../models/ICompany"

interface CompanyState {
    companies: ICompany[],
    activeCompanyId: number,
    canBeDeleted: number[],
}

const initialState: CompanyState = {
    companies: [
        {id:1, name:'Адепт', empoyers:[
            {id:1, name:'Дмитрий', surname:'Голов', position:"Разработчик", companyId:1},
            {id:2, name:'Иван', surname:'Иванов', position:'Менеджер', companyId:1},
            {id:3, name:'Сотрудник', surname:'Сотрудник', position:'Разработчик', companyId:1},
        ]},
    ],
    activeCompanyId: 0,
    canBeDeleted: [],
}

export const companySlice = createSlice({
    name:'company',
    initialState,
    reducers:{
        addCompany: (state, action: PayloadAction<ICompany>) => {
            state.companies = [...state.companies, action.payload]
        },
        deleteCompanies: (state) => {
            state.companies = state.companies.filter((company) => !state.canBeDeleted.includes(company.id))
        },
        changeActiveCompanyId: (state, action: PayloadAction<number>) => {
            state.activeCompanyId = action.payload
        },
        checkboxHandler: (state, action: PayloadAction<number>) => {
            state.canBeDeleted.includes(action.payload) ? state.canBeDeleted.filter(elem => elem !== action.payload) : state.canBeDeleted = [...state.canBeDeleted, action.payload]
        },
        
    }
})

export default companySlice.reducer