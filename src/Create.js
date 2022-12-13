import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("karan");
  const history=useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log('new blog')
        history.push('/')
    })
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="karan">karan</option>
          <option value="arjun">arjun</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
