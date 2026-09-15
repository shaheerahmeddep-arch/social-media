import React, { useContext, useEffect , useState} from 'react'
import Cards from './Cards'
import { PostList } from '../store/Post-list-store'
import Welcomemessage from './Welcomemessage';
import Loadingspinner from './Loadingspinner';
import { useLoaderData } from 'react-router-dom';

const Postlists = () => {
const postList = useLoaderData();
 


 

  return (
    <>
    {
     postList.length===0 && <Welcomemessage />
    }
    {postList.map((post)=>(
<Cards key={post.id} post={post}/>
    ))}

 
   </>
  )
}
export const Postloader = () =>{
 return fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data) =>{
   return data.posts
});
}

export default Postlists
