import "./App.css";
import Checkbox from "./components/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { companySlice } from "./store/reducers/CompanySlice";
import { useEffect } from "react";

function App() {
  const {companies, canBeDeleted} = useAppSelector(state => state.companyReducer)
  const {checkboxHandler} = companySlice.actions
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(checkboxHandler(1))
    dispatch(checkboxHandler(2))
    dispatch(checkboxHandler(3))
    dispatch(checkboxHandler(1))
  }, [])
  // функционал чекбокса пока не работтает (не убирает выделенные)
  console.log(canBeDeleted);
  return (
    <>
    <Checkbox />
     <table className="table" >
      <thead>
        <tr>
          <th onClick={() => dispatch(checkboxHandler(1))}>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
      </tbody>
      
     </table>
    </>
  );
}

export default App;
