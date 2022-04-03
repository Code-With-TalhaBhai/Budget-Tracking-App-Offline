import React,{useReducer} from "react";
import { createReducer } from "./ContextReducer";

export interface obj {
    text: String | null;
    amount: Number | null;
    type: "ADD" | "EXPENSE";
}
export const ReducerProvider:React.FC=({children})=>{
    
    // interface todo{
    //     text: 
    // }
    type State = obj[];
    type Action = {
        type: String,
        payload: obj
    }

    const reducer = (state:State,action:Action)=>{
        switch(action.type){
            case 'ADD': {
                return [action.payload,...state]
            }
            default : {
                return state;
            }
        }
    }
    function reduceProcess(obj:obj){
        dispatch({
        type: 'ADD',
        payload:{
            text: obj.text, 
            amount: obj.amount,
            type: obj.type
        }
    })
    }
    const [state,dispatch] = useReducer(reducer,[]);
    console.log(state)
    return(
    <createReducer.Provider value={{state,reduceProcess}}>
        {children}
    </createReducer.Provider>
    )
};