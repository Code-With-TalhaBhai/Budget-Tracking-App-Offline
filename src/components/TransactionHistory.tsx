import React,{useState} from 'react'
import '../App.css'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { InProps as IProps } from './AddExpense'
import Card from './Cards'
type Props = {
  state: IProps[];
  pmln: (arg:number)=>void;
}


export default function TransactionHistory({state,pmln}: Props) {
  // const [history, setHistory] = useState<IProps[]>(state);
  //   function deleteTransaction (elem:number):void{
  //   console.log(state.splice(elem,1));
  //   setHistory([...state]);
  //   console.log(history);
  // }
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
            return <Card key={index} num={index} text={element.text} amount={element.amount} type={element.type} del={pmln}/>
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