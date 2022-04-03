import React from 'react'
import '../App.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {InProps as Props} from './AddExpense';

// type Props = {
//   text: string;
//   amount: number;
//   type: string
// }

function Cards({text,amount,type}: Props) {
  return (
    //   <div>
    <div className="card">
                <div className="title">
                    <div className={`trans-con trans-con-${type ==='ADD'?'up':'down'}`}>
                      {type === 'ADD'?
                    <ArrowUpwardIcon/>:
                    <ArrowDownwardIcon/>
                  }
                  </div>
                    <p>{text}</p>
                </div>
                <div className="price">
                    $ {amount}
                </div>
            </div>
    // <div className="card">
    //             <div className="title">
    //                 <div className="trans-con trans-con-down">
    //                 <ArrowUpwardIcon/>
    //                 </div>
    //                 <p>Food</p>
    //             </div>
    //             <div className="price">
    //                 $ 54.00
    //             </div>
    //         </div>
    //     </div>
  )
}

export default Cards