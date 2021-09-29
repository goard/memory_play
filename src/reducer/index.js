export function reducerArray(state, action) {
  switch (action.type) {
    case "removeCard":
      return state.map((el) => {
        if (el.icons === action.payload) el.icons = "";
        return el;
      });
    case "hiddenAll":
      return state.map((el) => {
        el.hidden = true;
        return el;
      });
    case "showCard":
      return state.map((el) => {
        if (el.id === action.payload) {
          el.hidden = false;
        }
        return el;
      });
    case "hiddenCard":
      return state.map((el) => {
        if (el.id === action.payload) {
          el.hidden = true;
        }
        return el;
      });
    case "timeout":
      return setTimeout(() => {
        console.log("hi timeout");
      }, 5000);

    default:
      return state;
  }
}

export function reducerCount(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}
