import {FC} from 'react';
import classes from './Checkbox.module.css'


interface ICheckbox{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (e:boolean) => any 
    checked: boolean
}

const Checkbox:FC<ICheckbox> = ({onChange, checked}) =>{
   return(
      <input className={classes.checkbox} type='checkbox' onChange={(e) => onChange(e.target.checked)} checked={checked}/>
   )
}
export default Checkbox