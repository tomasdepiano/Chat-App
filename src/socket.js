import { io } from 'socket.io-client';
const ENDPOINT = 'http://localhost:3500';
const socket = io(ENDPOINT);

export default socket;