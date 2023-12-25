import {FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IEmployee } from '../../models/IEmployee';
import Checkbox from '../Checkbox/Checkbox';
import { employeeSlice } from '../../store/reducers/EmployeeSlice';
import InputSelect from '../InputSelect/InputSelect';
const EmployeeTableBody:FC = () => {

    const employees = useAppSelector(state => state.employeeReducer.employees)
    const activeEmployeeId = useAppSelector(state => state.employeeReducer.activeEmployeeId)
    const canBeDeleted = useAppSelector(state => state.employeeReducer.employeeCanBeDeleted)
    const activeCompanyId = useAppSelector(state => state.companyReducer.activeCompanyId)
    const {changeActiveEmployeeId, changeEmployeeNameHandler, changeEmployeeSurNameHandler, changeEmployeePositionHandler, checkboxHandler} = employeeSlice.actions
    const dispatch = useAppDispatch()


    return (
        <tbody>
            {employees?.map((employee:IEmployee) =>
                activeCompanyId === employee.companyId &&
                    <tr className={activeEmployeeId === employee.id ? 'active' : ''} key={employee.id} onClick={()=>dispatch(changeActiveEmployeeId(employee.id))}>
                        <td>
                            <Checkbox onChange={() => dispatch(checkboxHandler(employee.id))} checked={canBeDeleted.includes(employee.id)} />
                        </td>
                        <td>
                            {activeEmployeeId === employee.id
                                ? <input type='text' placeholder='Имя сотрудника' value={employee.name} onChange={(e) => dispatch(changeEmployeeNameHandler({id:employee.id, name:e.target.value}))}/>
                                : employee.name ? employee.name : 'Имя отсуствует'
                            }
                        </td>
                        <td>
                            {activeEmployeeId === employee.id
                                ? <input type='text' placeholder='Фамилия сотрудника' value={employee.surname} onChange={(e) => dispatch(changeEmployeeSurNameHandler({id:employee.id, surname:e.target.value}))}/>
                                : employee.surname ? employee.surname : 'Фамилия отсуствует'
                            }
                        </td>
                        <td>
                            {activeEmployeeId === employee.id
                                ? <InputSelect options={['test', 'test2']}  id={`${employee.id}`}  placeholder='Позиция сотрудника' value={employee.position} onChange={(value) => dispatch(changeEmployeePositionHandler({id:employee.id, position:value}))}/>
                                : employee.position ? employee.position : 'Фамилия отсуствует'
                            }
                        </td>
                        <td></td>
                    </tr>
            )}
        </tbody>
    )
}
export default EmployeeTableBody