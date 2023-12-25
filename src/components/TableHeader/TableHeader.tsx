import {FC} from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

interface ITableHeader {
   deleteFunc: () => void
   addFunc: () => void
   columns:string[]
   canBeDeleted:number[]
   multiCheckboxHandler:() => void
}

const TableHeader:FC<ITableHeader> = ({deleteFunc, addFunc, columns, canBeDeleted, multiCheckboxHandler}) =>{
   return(
      <thead>
          <tr>
            <th>
               <Checkbox checked={canBeDeleted.length >0}  onChange={multiCheckboxHandler}/>
            </th>
            {columns.map((column:string) => 
               <th key={column}>{column}</th>
            )}
            <th>
               <Button onClick={addFunc}>Добавить</Button>
               {canBeDeleted?.length > 0
                  &&  <Button onClick={deleteFunc}>Удалить</Button>
               }
            </th>
         </tr>
      </thead>
     
   )
}
export default TableHeader