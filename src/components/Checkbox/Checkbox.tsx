import {FC} from 'react';
import classes from './Checkbox.module.css'


interface ICheckbox{
    func?: () => void
    canBeDeleted: number[]
}

const Checkbox:FC<ICheckbox> = () =>{
   return(
      <input className={classes.checkbox} type='checkbox' onChange={(e) => console.log(e.target.value)} checked={false}/>
   )
}
export default Checkbox