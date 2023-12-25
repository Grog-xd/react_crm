import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from './reducers/CompanySlice'
import employeeReducer from './reducers/EmployeeSlice'

const  rootReducer = combineReducers({
    companyReducer,
    employeeReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']