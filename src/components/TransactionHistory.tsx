import React from 'react'
import '../App.css'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { InProps as IProps } from './AddExpense'
import Card from './Cards'
type Props = {
  state: IProps[]
}

export default function TransactionHistory({state}: Props) {
  console.log(state)
  return (
    <div className='transactions'>
        <div className="transaction-first">
            <p>Transactions</p>
            <p className='cursor'>View All</p>
        </div>
        <div className="transaction-card">
          {
          state.map((element:IProps,index:number)=>
            {
            return <Card text={element.text} amount={element.amount} type={element.type}/>
            }
          )
        }
        </div>
        {/* <div className="add-down">
            <p>+</p>
        </div> */}
    </div>
  )
}