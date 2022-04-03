import React,{createContext} from "react";

type defaultState = {
    reducer: any,
    reduceProcess: any
}

export const createReducer = createContext<defaultState | any>([]);
