import  express  from "express";
import morgan from 'morgan';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';
import { PORT } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: 'http://localhost:3000'
});

// Cualquier servidor externo distinto a Localhost 3000 podrá ser utilizado
app.use(cors());
app.use(morgan("dev"));

// Utilizamos el método on que lo que hace es escuchar cuando haya un movimiento nuevo de conexión
io.on('connection', (socket) => {
  console.log(socket);
  console.log(socket.id +': A user connected');
});

server.listen(PORT);
console.log('Status: server started on port: ',PORT);