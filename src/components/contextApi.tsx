// import React,{ createContext, useReducer } from "react";
import React from "react";
// interface contextType {
//     reducer: obj;
//     redProcess: ()=> any;
// }

// // const contextType = {
// //     reducer: ()=>any,
// //     redProcess: ()=> any
// // }
//     const defaultState = {
//         reducer: {
//             text:'',
//             amount: 0,
//             type: true
//         },
//         redProcess: ()=> console.log('working')
//     }

//     export const expenseContext = createContext<contextType>(defaultState);

// interface obj {
//     text: String;
//     amount: Number;
//     type: Boolean;
// }


// type State = obj[]; 

// interface Action{
//     type: String;
//     payload: any;
// }

// const initialState: Array<null> = ([]); 

// export const expenseInit:React.FC = ({children})=>{
//     const reducer = (state:State,action:Action)=>{
//         switch(action.type){
//             case "ADD" : {
//                 return [action.payload,...state]
//             }
//             default:{
//                 return state
//             }
//         }
//     }

//     const redProcess = (obj:obj)=>{
//         dispatch({
//             type: 'ADD',
//             payload:{
//                 text: obj.text,
//                 amount: obj.amount,
//                 type: obj.type
//             }
//         })
//     }

//     const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//    <expenseContext.Provider value={{reducer,redProcess}}>
//        {children}
//    </expenseContext.Provider>
//   )
// };