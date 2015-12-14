/**
 * Created by sameer on 12/13/15.
 */
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    var args = {
        data: {
            "auth": {
                "identity": {
                    "methods": [
                        "password"
                    ],
                        "password": {
                        "user": {
                            "id": "040d7060a671448481ccb4d9e8612961",
                                "password": "openstack"
                        }
                    }
                },
                "scope": {
                    "project": {
                        "id": "df92585287d44d50bf484b56b79d6264"
                    }
                }
            }
        },
        headers:{"Content-Type": "application/json"}
    };

    /*client.post("http://192.168.0.71:5000/v3/auth/tokens", args, function(data,response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
    });*/

    var options = {
        uri: 'http://192.168.0.73:5000/v3/auth/tokens',
        headers : {
            'Content-Type' : 'application/json'
        },
        json : true ,
        body: {
            "auth": {
                "identity": {
                    "methods": [
                        "password"
                    ],
                    "password": {
                        "user": {
                            "id": "040d7060a671448481ccb4d9e8612961",
                            "password": "openstack"
                        }
                    }
                },
                "scope": {
                    "project": {
                        "id": "df92585287d44d50bf484b56b79d6264"
                    }
                }
            }
        }
    };

    request.post(options, function(err, httpResponse, body) {
        var res = JSON.parse(JSON.stringify(body));
        console.log(res.token.catalog);
    });

});

module.exports = router;