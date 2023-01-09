import './App.css'
import Nav from './Nav'
import {PaginationContext} from './PaginationContext'
import {Pagination} from './Pagination'
import {useEffect,useReducer,useContext } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import {Search} from './Search'


export default function App() {

  const { toSetPageCount, currentPage, toSetRepos, toSetLastIndex,repos,toSetFirstIndex, lastIndex, pageCount}= useContext(PaginationContext)
  const reposPerPage=5;
  const buttonsPerPage=5
  async function getUser(){
    const totalRepos= await       
    fetch(`https://api.github.com/users/eyesaidyo`)
    .then(res=>res.json())
    .then(data=>data.public_repos)
    toSetFirstIndex(currentPage-1)
    toSetLastIndex((currentPage-1)+buttonsPerPage)
     console.log(totalRepos)
const profileResponse= await fetch(`https://api.github.com/users/eyesaidyo/repos?per_page=${reposPerPage}&page=${currentPage}`)
.then(res=>res.json())
    .then(res=>{
      toSetRepos(res)
      // console.log(res)
      toSetPageCount(Math.ceil(totalRepos/reposPerPage))
    })
    
  }
  useEffect(()=>{
      getUser()
 },[currentPage])
  const Cards=()=>{

    return (
      <div>
        {repos.map((repo)=>{
        return(
          <Link className='repo-item-link' to={repo.name} key={repo.id}>
          <h3 className='repo-item' >{repo.name}</h3>
            </Link>
        )
        })}
        </div>
    )
  }
const NotFound=()=><h1 style={{'margin-top':'60px'}}>sorry, page not found. check your spelling and try again</h1>
const Home=()=>{
    return(
      <div className='repo-list'>
          <h1>Rasine's Repositories</h1>
          <Cards/>  
          <Pagination reposPerPage={reposPerPage} buttonsPerPage={buttonsPerPage} />  
      </div>
    )
  }
  function About() {
    throw new Error("hey, there's an error")
  return (
    <h1 >We aim to give you the very best</h1>
  );
}
  const Card=(props)=>{
    return (
      <div className='info-card'>
        <p>name: <span className='info'>{props.name}</span></p>
        <p>url: <span className='info'><a style={{'color':'yellow','text-aliign':'center'}} href={props.url}>{props.url}</a></span></p>
        <p>language: <span className='info'>{props.language}</span></p>
        <p>visibility: <span className='info'>{props.visibility}</span></p>
        <p>date created: <span className='info'>{props.createdAt}</span> </p>
        <p>forks:<span className='info'> {props.forks}</span></p>
        <p>watchers: <span className='info'>{props.watchers}</span></p>
      </div>
    )
  }
  return (
    
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}>
          
          </Route>
          {repos.map(repo=>{
          return(
           <Route path={`/${repo.name}`} key={repo.id}               element={<Card 
          name={repo.name}
          forks={repo.forks}
          visibility={repo.visibility}              
          createdAt={repo.created_at}  
          language={repo.language}                                           watchers={repo.watchers}
          url={repo.html_url}
                                                                                />}>
           </Route>
              
          )
          })}
          <Route path='/search' element={<Search/>} ></Route>
          <Route path='/boundary' element={<About/>} ></Route>
          <Route path='*' element={<NotFound/>}> </Route>
        </Route>
      </Routes>
      
    </div>
     
  )
}
