import {createAction, createReducer} from "@reduxjs/toolkit"



export const setGralData = createAction("STORE");

const gralDataReducer = createReducer([],{
[setGralData]: (state, action) => { 
    // const agenciesNames=[]
    // arrData.map((agency)=>agenciesNames.push(agency.nameAgency))
    // const uniqueNames = [...new Set(agenciesNames)];
    // const agencies={};
    // for (let i = 0; i < uniqueNames.length; i++) {
    //     arrData.map((agency)=>{if (agency.nameAgency==uniqueNames[i])
    //         { if(!agencies[uniqueNames[i]]){ agencies[uniqueNames[i]]=[agency]
    //         } else {agencies[uniqueNames[i]].push(agency)}}})
    //     }
        // console.log("🚀 ~ file: generalData.js ~ line 10 ~ agencyA", agencies)
  state=action.payload
    return state
}
})

export default gralDataReducer