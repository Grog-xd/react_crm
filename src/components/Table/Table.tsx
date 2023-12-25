import {FC, ReactNode} from 'react';
import classes from './Table.module.css'

interface ITable {
    children:ReactNode,
}

const Table:FC<ITable> = ({children}) =>{
   return(
      <div className={classes.tableLayout} >
      <table className={classes.table}>
        {children}
      </table>
      </div>
   )
}
export default Table