import { useState } from "react"
import {Cards} from './Cards'

export const Search=()=>{
  const [ name, setName]= useState('')
  const [image, setImage]= useState('')
  const [currentPage, setCurrentPage]= useState(1)
  const [repos, setRepos] = useState([])
  const [showRepos, setShowRepos]= useState(false)
  const [showError, setShowError]=useState(false)
  const reposPerPage=5
  const handleChange=async (e)=>{
    if( e.target.value){
      await fetch(`https://api.github.com/users/${e.target.value}`)
      .then(res=>res.json())
      .then(res=>{
        if(res.status==404){
          setShowError(true)
        } else 
        { 
          setShowError(false)
          setName(res.name)
                  setImage(res.avatar_url)
      }})
     await fetch(`https://api.github.com/users/${e.target.value}/repos?per_page=${reposPerPage}&page=${currentPage}`)
       .then(res=>res.json())
      .then(res=>{
        
        setRepos(res)})
    }
  }
  const handleClick= async()=>{
    setShowRepos(true)
  }
  return(
    <div >
    
      <h1>search page</h1>
      <input type='search' onChange={handleChange} />
      {showError &&<h2>userNotFound</h2>}
      <div className='search-result'>
      <img onClick={handleClick} className="search-img" src={image}/>
      <p>{name}</p>
        {showRepos&&<Cards repos={repos}/> }
      </div>
    </div>
  )
}