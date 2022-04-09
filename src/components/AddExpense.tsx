import React, { useState,useRef,useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { motion } from 'framer-motion';
// import {obj as IProps} from './ContextApi/ReducerProvider';
const variants = {
    hidden:{opacity:0},
    visible:{opacity:1}
}

// type Props = {
//     transaction: (arg:StateProps["IProps"])=> void;
// }

type Props = {
  transaction:{
    State: InProps[],
    reduceProcess: (arg:StateProps["IProps"])=> void;
  },
  click: boolean;
  setclick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InProps {
  text: string;
  amount: number | string;
  type: "ADD" | "EXPENSE";
}


type StateProps = {
 IProps: InProps;
}
  
const AddExpense : React.FC<Props> = ({transaction,click,setclick}) => {
  const category = useRef<HTMLInputElement>(null);
  // const [object, setobject] = useState<StateProps['IProps']>({
  const [object, setobject] = useState<StateProps['IProps']>({
    text: '',
    amount: '',
    type: 'ADD'
  })
  useEffect(() => {
  category.current!.focus();
  }, [])
  
  const addExpense = (e:React.SyntheticEvent)=>{
    e.preventDefault();
      var letters = /^[A-Za-z\s]+$/;
      if(object.text.match(letters))
        {
         console.log(object);
         transaction.reduceProcess(object);
         console.log(transaction.State);
         setclick(true)
        }
      else
        {
        alert("Please only use letters in CATEGORY");
        } 
  }
  
  const changeExpense = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void=>{
    setobject({...object,[e.target.name]:e.target.value});
    // console.log(object);
  }

    return (
      <motion.div animate={{y:[-300,100,0],opacity:[0,1]}} transition={{duration:1.7}} className='addExpense'>
        <div className="clear-icon cursor" onClick={()=>setclick(true)}>
        <ClearIcon/>
        </div>
        {/* <h2 style={{'textAlign':'left'}}>Add Expenses</h2> */}
        <h2>Add Expenses</h2>
        <form onSubmit={addExpense}>
        <div className="expense-add">
        <div className="e-add">
          <p> Category</p>
        <div className="ex-add fo-sm">
            <input type="text" name='text' value={object.text} onChange={changeExpense} ref={category} placeholder='Enter your category' className='ex-amount cursor' minLength={3} maxLength={6} required/>
        </div>
        </div>
        <div className="e-add">
          <p> Amount</p>
        <div className="ex-add">
            <p className='ex-dollar'>$</p>
            <input type="number" name='amount' value={object.amount} onChange={changeExpense} placeholder='0' className='ex-amount cursor' required/>
        </div>
        </div>
        <div className="e-add">
          <p> Type</p>
        <div className="ex-add">
          <select name="type" onChange={changeExpense} value={object.type} className='ex-amount cursor'>
            <option value="ADD">Income</option>
            <option value="EXPENSE">Expense</option>
          </select>
        </div>
        </div>
        </div>
        <div className="expense-save cursor">
        <div className="ex-save">
            <button type='submit' className='save cursor'>SAVE</button>
        </div>
        </div>
        </form>
    </motion.div>
  )
}

export default AddExpense;