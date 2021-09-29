export default function (state, action) {
  switch (action.type) {
    case "removeCard":
      return;
      while (state.indexOf(action.payload) !== -1) {
        const idx = state.indexOf(action.payload);
        state.splice(idx, 1, "");
      }

    default:
      return state;
  }
}
