import { useEffect, useContext, useReducer} from "react";
import {PaginationContext} from './PaginationContext'
export const Pagination=({reposPerPage, buttonsPerPage})=>{
  const {pageCount, firstIndex, lastIndex, toSetFirstIndex, toSetCurrentPage,toSetLastIndex}= useContext(PaginationContext)
  const getPagesArray=()=>{
    
    let ans=[];
    for(let i=1; i<=pageCount; i++){
      ans.push(i)
    }
    return ans;
  }
  const pagesArray=getPagesArray()
  console.log(pagesArray)
  return (
    <div className='btn-cont'>
      <button
            className='pg-btn'
            disabled={firstIndex===0}
            onClick={()=>{
              toSetFirstIndex(firstIndex-buttonsPerPage+1 >=0?
                             firstIndex-buttonsPerPage:
                             null)
              
              toSetLastIndex(lastIndex=== pageCount?
                            lastIndex-(pageCount%buttonsPerPage):lastIndex-buttonsPerPage
                            )
              
            }}
            >prev</button>
       {
            
           pagesArray.slice(firstIndex, lastIndex).map((num,ind)=>{
             return (
               <button
                 key={pagesArray.indexOf(num)+1}
                 onClick={()=>{
           toSetCurrentPage(pagesArray.indexOf(num)+1)
                 }} 
              >{pagesArray.indexOf(num)+1}</button>)
           }
         )
        }
      <button
            className='pg-btn'
            disabled={lastIndex===pageCount || pageCount<buttonsPerPage}
            onClick={()=>{
              toSetFirstIndex(firstIndex+buttonsPerPage)
              
              toSetLastIndex(lastIndex+buttonsPerPage <=pageCount?lastIndex+buttonsPerPage:pageCount)
              
            }}
            >
        next
      </button>
    </div>
  )
}
