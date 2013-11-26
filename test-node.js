var server = require("./server");
var router = require("./router");
var put = console.log;
var putAndPause = function (string) { put(string); put(); };

put("*yawn*... Hi!");
putAndPause("Ok, starting server I guess...");

server.start(router);

putAndPause("What now?");
