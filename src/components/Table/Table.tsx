import {FC, ReactNode} from 'react';
import classes from './Table.module.css'

interface ITable {
    children:ReactNode,
}

const Table:FC<ITable> = ({children}) =>{
   return(
      <table className={classes.table}>
        {children}
      </table>
   )
}
export default Table