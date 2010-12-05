var tail = function(filename) {
  var tail = require('child_process').spawn('tail', ['-f', filename]);
  tail.stdout.on('data', function(data){
    console.log('stdout: ' + data);
  });
  tail.stderr.on('data', function(data){
    console.log('stderr: ' + data);
  });
  tail.on('exit', function(code) {
    console.log('tail exited with code ' + code);
  });
}

tail('/private/var/log/apache2/error_log');