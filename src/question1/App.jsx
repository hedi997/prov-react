// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

let count = 1;

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleList(e) {
    setInput(e.target.value);
  }

  function handleAddItem() {
    const item = {
      id: count++,
      text: input,
    };

    setList([...list, item]);
  }

  function handleRemove(id) {
    const filteredList = list.filter((item) => item.id != id);
    setList(filteredList);
  }

  return (
    <div>
      <h2>Lista på hobbies</h2>

      {list.map((item) => {
        return (
          <div>
            <p>{item.text}</p>
            <button onClick={() => handleRemove(item.id)}>Ta bort</button>
          </div>
        );
      })}

      <input type="text" onChange={handleList} />
      <button onClick={handleAddItem}>Lägg till</button>
    </div>
  );
}

export default App;
