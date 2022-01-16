const app = require("./request");
var port = process.env.PORT || 8080;


app.listen(port, function(err){
    if (err)
        throw err;
    console.log("Server running at Port 3000"); 
}); 
  
