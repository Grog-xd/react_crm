import {FC} from 'react';
import { ICompany } from '../../models/ICompany';

interface ITableHeader {
   deleteFunc: () => void
   addFunc: () => ICompany
}

const TableHeader:FC<ITableHeader> = ({deleteFunc, addFunc}) =>{
   return(
      <tr>

      </tr>
   )
}
export default TableHeader