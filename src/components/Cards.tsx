import React from 'react'
import '../App.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
// import {InProps as Props} from './AddExpense';

type Props = {
  num: number;
  text: string;
  amount: number | string;
  type: string;
  del: (arg:number)=> void;
}

function Cards({num,text,amount,type,del}: Props) {
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
                <DeleteIcon style={{fontSize:'30px'}} className="delete cursor" onClick={()=>del(num)}/>
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