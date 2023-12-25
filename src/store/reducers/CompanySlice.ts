import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICompany } from "../../models/ICompany"

interface CompanyState {
    companies: ICompany[],
    activeCompanyId: number,
    companiesCanBeDeleted: number[],
}

const initialState: CompanyState = {
    companies: [
        {id:1, name:'Адепт', address:'Нижний Новгород'},
    ],
    activeCompanyId: 0,
    companiesCanBeDeleted: [],
}

export const companySlice = createSlice({
    name:'company',
    initialState,
    reducers:{
        addCompany: (state, action: PayloadAction<ICompany>) => {
            state.companies = [...state.companies, action.payload]
        },
        deleteCompanies: (state) => {
            state.companies = state.companies.filter((company) => !state.companiesCanBeDeleted.includes(company.id))
            state.companiesCanBeDeleted = []
        },
        changeActiveCompanyId: (state, action: PayloadAction<number>) => {
            state.activeCompanyId = action.payload
        },
        checkboxHandler: (state, action: PayloadAction<number>) => {
            state.companiesCanBeDeleted.includes(action.payload) 
                ? state.companiesCanBeDeleted = state.companiesCanBeDeleted.filter(elem => elem != action.payload) 
                : state.companiesCanBeDeleted = [...state.companiesCanBeDeleted, action.payload]
        },
        multiCompanyCheckboxHandler: (state, action: PayloadAction<boolean>) => {            
            action.payload 
                ? state.companiesCanBeDeleted = state.companies.map((company) => company.id)
                : state.companiesCanBeDeleted = []
        },
        changeCompanyNameHandler: (state, action: PayloadAction<{id:number, name:string}>) => {
            state.companies = state.companies.map((company) => company.id === action.payload.id ? 
            {
                ...company,
                name: action.payload.name
            } 
            :  company)
        },
        changeCompanyAddressHandler: (state, action: PayloadAction<{id:number, address:string}>) => {
            state.companies = state.companies.map((company) => company.id === action.payload.id ? 
            {
                ...company,
                address: action.payload.address
            } 
            :  company)
        },
        
    }
})

export default companySlice.reducer