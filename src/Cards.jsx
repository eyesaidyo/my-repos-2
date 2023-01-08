import { Link } from "react-router-dom"
export const Cards=({repos})=>{

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