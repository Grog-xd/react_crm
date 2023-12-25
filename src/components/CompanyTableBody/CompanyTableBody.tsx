import {FC} from 'react';
import { ICompany } from '../../models/ICompany';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Checkbox from '../Checkbox/Checkbox';
import { companySlice } from '../../store/reducers/CompanySlice';


const CompanyTableBody:FC = () =>{

   const companies = useAppSelector(state => state.companyReducer.companies)
   const activeCompanyId = useAppSelector(state => state.companyReducer.activeCompanyId)
   const  canBeDeleted = useAppSelector(state => state.companyReducer.companiesCanBeDeleted)
   const employees = useAppSelector(state => state.employeeReducer.employees)
   const dispatch = useAppDispatch()
   const {changeActiveCompanyId, checkboxHandler, changeCompanyNameHandler, changeCompanyAddressHandler} = companySlice.actions
   


   return(
      <tbody>
         {companies?.map((company:ICompany) =>
            <tr className={activeCompanyId === company.id ? 'active' : ''} key={company.id} onClick={()=>dispatch(changeActiveCompanyId(company.id))}>
               <td>
                  <Checkbox onChange={() => dispatch(checkboxHandler(company.id))} checked={canBeDeleted.includes(company.id)} />
               </td>
               <td>
                  {activeCompanyId === company.id
                     ? <input type='text' placeholder='Название компании' value={company.name} onChange={(e) => dispatch(changeCompanyNameHandler({id:company.id, name:e.target.value}))}/>
                     : company.name ? company.name : 'Нет названия'
                  }
               </td>
               <td>{employees.reduce((acc, cur) => company.id === cur.companyId && acc + 1, 0)}</td>
               <td>
                  {activeCompanyId === company.id
                     ? <input type='text' placeholder='Адрес компании' value={company.address} onChange={(e) => dispatch(changeCompanyAddressHandler({id:company.id, address:e.target.value}))}/>
                     : company.address ? company.address : 'Нет адреса'
                  }
               </td>
               <td></td>
            </tr>
         )}
      </tbody>
   )
}
export default CompanyTableBody