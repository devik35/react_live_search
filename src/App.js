import React, { useState, useMemo, useRef } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(()=>{
    return items.filter(item=>{
    return item.toLowerCase().includes(query.toLowerCase())
  })
},[query, items])

  function onSubmit(e){
    e.preventDefault();

    const value = inputRef.current.value;
    if(value === "") return;
    setItems(prev =>{
      return[...prev, value]
    })
    inputRef.current.value = '';
  };
  return (
    <div>
      Search
      <input type="search" value={query} onChange={e=>setQuery(e.target.value)} />
      <br />
      <br />
      <form onSubmit={onSubmit}>
       A New Item:
        <input ref={inputRef} type="text" name="text" id="text" />
        <button type="submit">Add</button>
        <br />
      </form>
      <h3>Items:</h3>
      {
        filteredItems.map(item=>(
          <div>{item}</div>
        ))
      }
    </div>
  );
}
