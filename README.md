node-monitor provides several services:

* server
  * monitors one or more log files for changes using 'tail -f'
  * notifies listeners via socket.io of changes
* client 
  * connects to remote monitor servers
* web
  * web interface that gets notifications from the client for all connected servers