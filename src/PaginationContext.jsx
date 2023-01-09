import {createContext, useReducer} from 'react'
const INITIAL_STATE={
    pageCount:0,
    firstIndex:0,
    lastIndex:0,
    currentPage:1,
    repos:[]
  }
export const PaginationContext=createContext({
  ...INITIAL_STATE,
  toSetFirstIndex:()=>{},
  toSetLastIndex:()=>{},
  toSetCurrentPage:()=>{},
  toSetPageCount:()=>{},
  toSetRepos:()=>{}
})
export const PaginationProvider=({children})=>{
   
  
  const paginationReducer=(state, action)=>{
    const {type, payload}= action
    switch (type){
      case 'CHANGE_FIRST_INDEX':
        return {
          ...state,
          firstIndex:payload
        }
      case 'CHANGE_LAST_INDEX':
        return {
          ...state,
          lastIndex:payload
        }
      case 'change_page':
        return{
          ...state,
          currentPage:payload
        }
        case 'change_page_count':
        return{
          ...state,
          pageCount:payload
        }
        case 'change_repos':
        return{
          ...state,
          repos:payload
        }
      default:
        return state
        
    } 
  }
  const [state, dispatch]= useReducer(paginationReducer, INITIAL_STATE)
  
  const toSetFirstIndex=(idx)=>{
    dispatch({type:'CHANGE_FIRST_INDEX', payload:idx})
  }
  const toSetLastIndex=(idx)=>{
    console.log(idx)
    dispatch({type:'CHANGE_LAST_INDEX', payload:idx})
  }
  const toSetCurrentPage=(page)=>{
    dispatch({type:'change_page', payload:page})
  }
  const toSetPageCount=(num)=>{
    dispatch({type:'change_page_count', payload:num})
  }
  const toSetRepos=(arr)=>{
    dispatch({type:'change_repos', payload:arr})
  }
  return <PaginationContext.Provider value={{
    ...state,
    toSetFirstIndex,
  toSetLastIndex,
  toSetCurrentPage,
  toSetPageCount,
  toSetRepos
    
  }}>
    {children}
  </PaginationContext.Provider>
}