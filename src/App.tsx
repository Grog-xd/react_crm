import "./App.css";
import Table from "./components/Table/Table";
import TableHeader from "./components/TableHeader/TableHeader";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { createId } from "./hooks/createId";
import { companySlice } from "./store/reducers/CompanySlice";
import CompanyTableBody from "./components/CompanyTableBody/CompanyTableBody";
import { employeeSlice } from "./store/reducers/EmployeeSlice";
import EmployeeTableBody from "./components/EmployeeTableBody/EmployeeTableBody";
import { useEffect } from "react";

function App() {
  const {employeeCanBeDeleted} = useAppSelector(state => state.employeeReducer)
  const {companiesCanBeDeleted, activeCompanyId} = useAppSelector(state => state.companyReducer)
  const {deleteCompanies, addCompany, changeActiveCompanyId, multiCompanyCheckboxHandler} = companySlice.actions
  const {deleteEmploees, addEmployee, changeActiveEmployeeId, multiEmployeeCheckboxHandler, clearCanBeDeletedArray} = employeeSlice.actions
  const dispatch = useAppDispatch()
  

  useEffect(() =>{
    dispatch(clearCanBeDeletedArray())
  }, [activeCompanyId])

  function addNewCompany(){
    const companyId = createId()
    dispatch(addCompany({name:'', address:'',id:companyId}))
    dispatch(changeActiveCompanyId(companyId))
  }
  function deleteCompany(){
    dispatch(deleteCompanies())
  }
  function addNewEmployee(){
    const employeeId = createId()
    dispatch(addEmployee({name:'', surname:'', position:'',id:employeeId, companyId: activeCompanyId}))
    dispatch(changeActiveEmployeeId(employeeId))
  }
  function deleteEmployee(){
    dispatch(deleteEmploees())
  }

  return (
    <div className='app'>
      <Table>
        <TableHeader multiCheckboxHandler={(e)=>dispatch(multiCompanyCheckboxHandler(e))} canBeDeleted={companiesCanBeDeleted} columns={['Название', 'Кол-во сотрудников', 'Адрес']} addFunc={addNewCompany} deleteFunc={deleteCompany}/>
        <CompanyTableBody/>
      </Table>
      <Table>
        <TableHeader multiCheckboxHandler={(e) => dispatch(multiEmployeeCheckboxHandler({companyId:activeCompanyId, status:e}))} canBeDeleted={employeeCanBeDeleted} columns={['Имя', 'Фамилия', 'Должность']} addFunc={addNewEmployee} deleteFunc={deleteEmployee}/>
        <EmployeeTableBody/>
      </Table>
    </div>
  );
}

export default App;
