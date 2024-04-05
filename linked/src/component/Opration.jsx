import { arr, state } from './State';
import { atom, useRecoilState } from 'recoil';
export function Adding(event){
    const [set,setstate]= useRecoilState(arr)
    const [value,setvalue]= useRecoilState(state);
     setvalue(event.target.value);
    fetch("http://localhost:3000/add?input="+value,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          }
    })  .then(response => response.json()) // Parse the JSON data
    .then(data => {
      if (data === "Queue is full") {
        // Handle queue full
      } else {
        setstate(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
export function Deleting(){
    const [set,setstate]= useRecoilState(arr)
    fetch("http://localhost:3000/del",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          }
    }).then(response => response.json()) // Parse the JSON data
    .then(data => {
      if (data === "Queue is empty") {
        // Handle queue empty
      } else {
        setstate(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}