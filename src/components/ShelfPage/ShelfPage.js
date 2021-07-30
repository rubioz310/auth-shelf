import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";

function ShelfPage() {
  const dispatch = useDispatch();

  // const items = useSelector((store) => store.shelf.newItem);
  const [item, setItem] = useState({
    description: "",
    image_url: ""
  })

  // const addItem = () => {
  //   dispatch({
  //     type: "ADD_ITEM",
  //     payload: item,
  //   });
  // };

  const onSave = () => {
    dispatch({
      type: "POST_ITEM",
      payload: item,
    });
  };

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
    </div>
  );
}

export default ShelfPage;
