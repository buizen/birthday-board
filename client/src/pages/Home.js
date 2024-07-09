import { useState, useEffect } from "react"
import axios from 'axios';

export default function Home() {

  
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('https://birthday-board-server.vercel.app/api/posts')
    .then(res => {
      console.log(res.data.obj.table);
      for (let i = 0; i < res.data.obj.table.length; i++) {
        res.data.obj.table[i].filename = 'https://birthday-board-server.vercel.app/api/images/' + res.data.obj.table[i].filename;
      };
      setPosts(res.data.obj.table);
    }).catch(err=> {
      console.log(err)

    })

  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
      <div className="home">
        <h1 class="title">Penta Birthday</h1>
        <form action="api/posts" method="get" target="_blank">
        </form>
        <div>
          {posts.map(p => (
            <div className="posts-list" key={p.id}>
              <span>From: { p.name }</span>
              <p>{ p.message }</p>
              <img className="img-size" src={ p.filename} alt=""/>
            </div>
          ))}
        </div>

      </div>
      
    )
  }