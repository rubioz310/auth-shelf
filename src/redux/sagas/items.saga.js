import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* itemSaga() {
  yield takeEvery("GET_ITEMS", fetchAllItems);
  yield takeEvery("POST_ITEM", addItem);
  yield takeEvery("DELETE_ITEM", deleteItem);
}

function* fetchAllItems() {
  try {
    const items = yield axios.get("/api/shelf");
    console.log("get all items:", items.data);
    yield put({ type: "SET_ITEMS", payload: items.data });
  } catch {
    console.log("get all items error");
  }
}

function* addItem(action) {
  yield axios.post("api/shelf", action.payload);
  yield put({ type: "GET_ITEMS" });
}
//need to solve how to do delete

function* deleteItem(action) {
  try {
    yield axios.delete(`/shelf/${action.payload}`);
    yield put({ type: "GET_ITEMS" });
  } catch {
    console.log("Error deleting item");
  }
}

export default itemSaga;
