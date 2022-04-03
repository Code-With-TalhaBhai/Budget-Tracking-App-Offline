import React,{useContext} from 'react'
import SubExpense from './SubExpense'
import AddExpense from './AddExpense'
import { motion } from "framer-motion"
import { createReducer } from './ContextApi/ContextReducer'


function Expense() {
   const ExpenseTransaction = useContext(createReducer);
   console.log(ExpenseTransaction);
   const {state,reduceProcess} = ExpenseTransaction;
  //  const contextExpense = ExpenseTransaction.reduceProcess;
  //  console.log(contextExpense)
  return (
    <motion.div animate={{x:[-1000,0]}} transition={{duration:1.4}} className='expense'>
    <SubExpense State={state}/>
    <AddExpense transaction={ExpenseTransaction}/>
    </motion.div>
  )
}

export default Expense;