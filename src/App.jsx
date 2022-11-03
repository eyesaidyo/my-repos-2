import './App.css'
import Nav from './Nav'
import {useEffect, useState} from 'react'
import { Routes, Route, Link} from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC85sNSRpDbuXkPVJxZ_uBwtkReOpyLJRM",
  authDomain: "my-repos-page.firebaseapp.com",
  projectId: "my-repos-page",
  storageBucket: "my-repos-page.appspot.com",
  messagingSenderId: "316973713025",
  appId: "1:316973713025:web:4a8d612f8d918ba0172f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function App() {
  const [repos, setRepos]= useState([])
  const [currentPage, setCurrentPage]= useState(1)
  async function getUser(){
const profileResponse= await fetch(`https://api.github.com/users/eyesaidyo/repos?per_page=4&page=${currentPage}`)
.then(res=>res.json())
    .then(res=>{
      setRepos(res)
    })
    
  }
  useEffect(()=>{
      getUser()
    },[currentPage])
  const Cards=()=>{
    
    return (
      <div>
        {repos.map(repo=>{
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
        <div className='btn-cont'>
      <button
        className='pg-btn'
        disabled={currentPage===1}
        onClick={()=>{
          setCurrentPage(prev=>prev-1)
        }}
        >prev</button>
      <button 
        className='pg-btn'
        onClick={()=>{
      setCurrentPage(1)
    }}
        
        >1</button>
      <button
        className='pg-btn'
        onClick={()=>{
      setCurrentPage(2)}
      }>2</button>
      <button className='pg-btn' onClick={()=>{
      setCurrentPage(3)}
      }>3</button>
      <button
        className='pg-btn'
        disabled={currentPage===3}
        onClick={()=>{
          setCurrentPage(prev=>prev+1)
        }}
        >next</button>
          </div>
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
          
          <Route path='/boundary' element={<About/>} ></Route>
          <Route path='*' element={<NotFound/>}> </Route>
        </Route>
      </Routes>
      
    </div>
     
  )
}
