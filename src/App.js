import React, { Component } from 'react';
import './App.css';

import Forms from './components/Forms'
import Post from './components/Post'

class App extends Component {

  state = {
    posts: [],
  }

  getUser = async (e) => {
    e.preventDefault();
    const user_name = e.target.elements.user.value; 
    const api_call = await fetch('https://jsonplaceholder.typicode.com/users');
    //new string replacing syntax doesn't seem to play nice here. 
    const data = await api_call.json();
    console.log(data);

    const user_id = data.find( (obj) => {return obj.name === user_name;}).id;

    const api_call2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    const posts = await api_call2.json();
    console.log(posts);

    this.setState({
      posts: posts, //just grabbing directly from the json key names.
      error: ""
    })
    console.log(this.state.posts)
  
  }

  getComments  = async (e) =>{
    e.preventDefault();
    const api_call = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const comments = await api_call.json();

    const c = '';
    const all_text = comments.map((comment) => {return comment.body})
    all_text.forEach((comment) => {c.concat(comment);})
    console.log(c);
  }

  render() {
    return (
      <div className="App">
        <Forms getUser={this.getUser}/>
        {this.state.posts.map(function(listValue){
            return(<Post post={listValue} />)
        })}        
      </div>
    );
  }
}

export default App;
