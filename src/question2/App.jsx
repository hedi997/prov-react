// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  function handleClick(id) {
    console.log(id);
  }

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 5));
    }

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <button key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </button>
        );
      })}
    </div>
  );
}

export default App;
