import {FC, ReactNode} from 'react';
import classes from './Button.module.css'

interface IButton{
    children:ReactNode
    onClick:() => void
}

const Button:FC<IButton> = ({children, onClick}) =>{
   return(
      <button className={classes.btn} onClick={onClick}>{children}</button>
   )
}
export default Button