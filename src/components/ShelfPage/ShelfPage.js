
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ShelfPage() {
  const dispatch = useDispatch();

  const items = useSelector((store) => store.genres);

  const addItem = () => {
    dispatch({
      type: "POST_ITEM",
      payload: items,
    });
  };

  const onSave = () => {
    dispatch({
      type: "ADD_ITEM",
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
          value={items.description}
          onChange={(event) => addItem({...items, description: event.target.value})}
        />
      </div>
      <div>
        <input
          placeholder="Poster URL"
          value={items.image_url}
          onChange={(event) => addItem({...items, image_url: event.target.value })}
        />
      </div>
    </div>
  );
}

export default ShelfPage;
