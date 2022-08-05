export let socket = new WebSocket("ws://localhost:8766");
socket.onclose = () => {
  socket = new WebSocket("ws://localhost:8766");
};
