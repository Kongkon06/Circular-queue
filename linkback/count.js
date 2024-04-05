const express  = require('express');
const app= express();
const arr=[1,2,3,4,5,6,7,8];
let f=0,r=7;
const Max=8;
function insert(val) {
  if (f === -1 && r === -1) {
      f = r = 0;
      arr.push(val);
      return "sucess";
  } else if (f === 0 && r < Max - 1) {
      r = r + 1;
      arr.push(val);;
      return "sucess";
  } else if (f === r && f === Max - 1) {
      r = 0;
      arr[r] = 0;
      return "sucess";
  } else if (r + 1 === f) {
      return "queue is full";
  } else if (f > 0 && r < Max - 1) {
      r = r + 1;
      arr.push(val);;
      return "sucess";
  } else if (f > 0 && r === Max - 1) {
      r = 0;
      arr.push(val);
      return "sucess";
  } else if (f === 0 && r === Max - 1) {
      return "queue is full";
  }
};
function del(){
  if (f === -1 && r === -1) {
      return"queue is empty";
  } else if (f === r) {
      arr[f] = 0;
      f = r = -1;
      return "sucess";
  } else if (f === Max - 1 && r >= 0) {
      arr[f] = 0;
      f = 0;
      return "sucess";
  } else {
      arr[f] = 0;
      f = f + 1;
      return "sucess";
  }
}
function insert2(val){
  if (f === -1 && r === -1) {
    f = r = 0;
    arr[f] = val;
    return "sucess";
} else if (f === 0 && r < Max - 1) {
    r = r + 1;
    arr[r] = val;
    return "sucess";
} else if (f === r && f === Max - 1) {
    r = 0;
    arr[r] = 0;
    return "sucess";
} else if (r + 1 === f) {
    return "queue is full";
} else if (f > 0 && r < Max - 1) {
    r = r + 1;
    arr[r] = val;
    return "sucess";
} else if (f > 0 && r === Max - 1) {
    r = 0;
    arr[r] = val
    return "sucess";
} else if (f === 0 && r === Max - 1) {
    return "queue is full";
}
}
function wrapper(value){
  if(arr.length===8){
    const result=insert2(value);
    return result;
  }else{
    const result =insert(value);
    return result;
  };
}
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from this origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Specify allowed headers
    next();
});
app.post("/add",(req,res)=>{
    const input =JSON.parse(req.query.input);
    const result= wrapper(parseInt(input));
    
    if(result === "sucess"){
        res.json(arr);
    }
    else if(result === "queue is full"){
        res.json(result)
    }else{
        res.status(404).json("error");
    }
    return 
})

app.post("/delete",(req,res)=>{
    const result =del();
    if(result==="sucess"){
        res.json(arr);
    }
    else if(result === "queue is empty"){
        res.json({msg:"stack is full"})
    }else{
        res.status(404).json("error");
    }
    return 
})

app.post("/",(req,res)=>{
  res.json(arr);
})
app.listen(3000);