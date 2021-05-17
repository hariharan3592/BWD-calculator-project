const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var a=Number(req.body.num1);
  var b=Number(req.body.num2);
  var c=a+b;
  res.send("The answer is "+ c);
});

app.listen(3592,function(){
  console.log("Server has started at port 3592");
});
