const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
 
server.use(middlewares);
server.use('http://localhost:8001/transactions', router);

// Determine the port where React application is running
const REACT_APP_PORT = 8000; // You might need to adjust this based on your setup

server.listen(REACT_APP_PORT, () => {
  console.log(`JSON Server is running on port ${REACT_APP_PORT}`);
});
