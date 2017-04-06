// Instantiate server app
import { Backend } from './backend';

// Bootstrap the server
const backend = new Backend();

// Start listening
const port = process.env.PORT || 5000;
backend.server.listen(port);

// add error handler
backend.server.on('error', error => {
  console.log('ERROR', error);
});

// start listening on port
backend.server.on('listening', () => {
  console.log(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
