import {FC, ReactNode} from 'react';
import classes from './Button.module.css'

interface IButton{
    children:ReactNode
    onClick:() => void
    // добавить еще поле дял стилей
}

const Button:FC<IButton> = ({children, onClick}) =>{
   return(
      <button className={classes.btn}>{children}</button>
   )
}
export default Button