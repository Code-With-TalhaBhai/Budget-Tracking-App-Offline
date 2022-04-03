import React,{useState,useRef} from "react"
import '../App.css'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import user from '../img/user.png';
import TransactionHistory from './TransactionHistory'
import { motion } from 'framer-motion';
import {InProps as IProps} from './AddExpense'

type Props = {
  State: IProps[];
}


const SubExpense: React.FC<Props> = ({State}) => {
  const [clicked, setclicked] = useState<boolean>(false);
  return (
  <motion.div animate={{y:[-300,100,0],opacity:[0,1]}} transition={{duration:1.7}} className='sub-expense'>
      <div className="user">
        <div className="user-left">
          <div className="user-img">
            <img src={user} alt="" />
          </div>
          <div className="user-para">
        <p className="user-left-first">Welcome!</p>
        <p className="user-left-second">User</p>
          </div>
        </div>
        {/* <div className="user-right"> */}
          {/* <img src="../img/options.png" /> */}
          <svg style={{'display':'none'}} className="sv-slider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"/></svg>
        {/* </div> */}
      </div>
      <div className="expense-feed">
        <div className="expense-sub-feed">
        <div className="total-balance">
          <p>Total Balance</p>
          <p>$ 0.00</p>
        </div>
        <div className="balance-transaction">
          <div className="income-detail detail">
          <div className="up-icons tr-icon">
          <ArrowUpwardIcon style={{'color':'green'}}/>
          </div>
          <div className="income">
            <p>Income</p>
            <p>$ 2500.00</p>
          </div>
          </div>
          <div className="expenses-detail detail">
            <div className="down-icon tr-icon">
            <ArrowDownwardIcon style={{'color':'red'}}/>
            </div>
          <div className="expenses">
            <p>Expense</p>
            <p>$ 2500.00</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <TransactionHistory state={State}/>
    {/* <div className={window.scrollY===0?"add-btn cursor bk":"add-btn cursor"}> */}

     {/* <div className={`add-btn cursor ${window.scrollY===0?"bk":""}`}>
      <p>+</p>
    </div> */}
    
    </motion.div>
  )
}

export default SubExpense;