var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/index":
    return displayRoot(path, req, res);

  case "/route1":
    return displayroute1(path, req, res);

  case "/route2":
    return displayroute2(path, req, res);
  
  case "/route3":
    return displayroute3(path, req, res);  



  default:
    return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>index</h1>" +
    "<a href='/index'>index</a>" +
    "</body></html>";

  

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
  
}
function displayroute1(url, req, res) {
  var myHTML1 = "<html>" +
    "<body><h1>oute1</h1>" +
    "<a href='/route1'>route1</a>" +
    "</body></html>";

  

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML1);
  
}
function displayroute2(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>route2</h1>" +
    "<a href='/route2'>route2</a>" +
    "</body></html>";

  

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML2);
  
}
function displayroute3(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>route3</h1>" +
    "<a href='/route3'>route3</a>" +
    "</body></html>";

  

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML3);
  
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayRoot(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>index</h1>" +
    "<a href='/'>index</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
function displayroute1(url, req, res) {
  var myHTML1 = "<html>" +
    "<body><h1>route1</h1>" +
    "<a href='/'>route1</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML1);
}
function displayroute2(url, req, res) {
  var myHTML2 = "<html>" +
    "<body><h1>route2</h1>" +
    "<a href='/'>route2</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML2);
}
function displayroute3(url, req, res) {
  var myHTML3 = "<html>" +
    "<body><h1>route3</h1>" +
    "<a href='/'>route3</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML3);
}
// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);

}
