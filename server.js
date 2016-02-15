var express= require('express');
var bodyParser = require('body-parser');
var userAgent = require('useragent');

var app = express();

app.get('/api/whoami', function(req, res) {
    var headers = req.headers;
    var language = headers['accept-language'].split(',');
    
    var agent = userAgent.parse(headers['user-agent']);
    
    var connection = req.connection.remoteAddress;
    connection = connection.split(':');
    var clientIP = connection[connection.length-1];
    
    var result = {
        ipaddress : clientIP,
        language : language[0],
        software : agent.os.toString()
    }
    res.send(result);
});

app.listen(8080);