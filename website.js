var connect = require('connect');
connect.createServer(
  connect.logger(),
  connect.staticProvider('./web/')
).listen(8001);