// lib/posts.js
const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post content' },
    { id: '2', title: 'Second Post', content: 'This is the second post content' },
  ];
  
  export function getPosts() {
    return posts;
  }
  
  export function getPostIds() {
    return posts.map(post => post.id);
  }
  
  export function getPost(id) {
    return posts.find(post => post.id === id);
  }
  