export let socket = new WebSocket("ws://54.242.116.71:8766");
socket.onclose = () => {
  socket = new WebSocket("ws://54.242.116.71:8766");
};
