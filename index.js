var fs = require('fs');
var httpProxy = require('http-proxy');

httpProxy.createServer({
  target: {
    host: '127.0.0.1',
    port: 9656
  },
  ssl: {
    key: fs.readFileSync('/root/expnode.key', 'utf8'),
    cert: fs.readFileSync('/root/expnode.cert', 'utf8')
  }
}).listen(443);
