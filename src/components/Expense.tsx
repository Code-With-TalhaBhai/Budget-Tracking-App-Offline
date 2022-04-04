import React,{useContext,useState} from 'react'
import SubExpense from './SubExpense'
import AddExpense from './AddExpense'
import { motion } from "framer-motion"
import { createReducer } from './ContextApi/ContextReducer'


function Expense() {
   const [click, setclick] = useState<boolean>(true);
   const ExpenseTransaction = useContext(createReducer);
   console.log(ExpenseTransaction);
   const {state,reduceProcess} = ExpenseTransaction;
  //  const contextExpense = ExpenseTransaction.reduceProcess;
  //  console.log(contextExpense)
  return (
    <motion.div animate={{x:[-1000,0]}} transition={{duration:1.4}} className='expense'>
      {click === true?
    <SubExpense State={state} click={click} setclick={setclick}/>:
    <AddExpense transaction={ExpenseTransaction} click={click} setclick={setclick}/>
      }
    </motion.div>
  )
}

export default Expense;