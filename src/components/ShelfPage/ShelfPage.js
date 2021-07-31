import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";
import { useEffect } from "react";
import './ShelfPage.css'

function ShelfPage() {
  const dispatch = useDispatch();

  //Get all items from database when loading page
  useEffect(() => {
    dispatch({
      type: 'GET_ITEMS'
    });
  }, []);

  const allItems = useSelector((store) => store.shelf.items);
  const [item, setItem] = useState({
    description: "",
    image_url: ""
  })

  const onSave = () => {
    dispatch({
      type: "POST_ITEM",
      payload: item,
    });
    setItem({
      description: "",
      image_url: ""
    })
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    })
  }

  return (
    <div>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
      </div>
      <div>
        <button onClick={onSave}>Save</button>
      </div>
      <div>
        <input
          placeholder="Item"
          value={item.description}
          onChange={(event) => setItem({...item, description: event.target.value})}
        />
      </div>
      <div>
        <input
          placeholder="Poster URL"
          value={item.image_url}
          onChange={(event) => setItem({...item, image_url: event.target.value })}
        />
      </div>
      <div>
        <ul>
          {allItems.map(stuff =>  (
          <li key={stuff.id}>
            {stuff.description}
            <img className="shelfImg" src={stuff.image_url} />
            <button type="button" onClick={() => handleDelete(stuff.id)}>Delete</button>
          </li>))}
        </ul>
      </div>
    </div>
  );
}

export default ShelfPage;
