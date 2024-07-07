import {Link} from 'react-router-dom'

export const Nav = ()=>{

    return(
        <div id="nav">
         <p> <Link to='/'>Home</Link></p>
         <p> <Link to='/1/profile'>Profile</Link></p>
         <p><Link to='messages'>Messages</Link></p>
          <div id='textarea'>
            <p>Write Tweet</p>
            <textarea/>
            <button>Post</button>
          </div>
        </div>
    )


}
