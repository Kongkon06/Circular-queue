import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Queue } from './component/Queue';
import { Input } from './component/IO';
import { full, mainarr } from './component/State';
import { RecoilRoot, useRecoilState } from 'recoil';
function Render(){
  const [arrState, setArrState] = useRecoilState(mainarr);
   return useEffect(() => {
    fetch(`http://localhost:3000`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
          setArrState(data);
          console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });;
  }, []); // Fetch data once when component mounts
}
function App() {
  return (
    <div>
      <RecoilRoot>
        <div style={{ fontFamily: '-moz-initial', fontSize: '55px', display: 'flex', justifyContent: 'center',height:'200px',alignItems:'center' }}>
          <h1>-Circular Queue-</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Input />
        </div>
        <Warning/>
        <div>
        <Wrapper/>
        </div>
        <Render></Render>
      </RecoilRoot>
    </div>
  );
}
function Wrapper() {
  const [arr, setArr] = useRecoilState(mainarr);

  return useMemo(() => (
    <div>
      <div className="Parent">
        <div className="Grid-container">
          <div className="Circle">
            <div className="Circle2"></div>
          </div>
          <div style={{ gridColumn: 2, gridRow: 1, fontSize: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>{arr[0] > 0 ? arr[0] : ''}</div>
          <div style={{ gridColumn: 3, gridRow: 1, fontSize: '48px', position: 'absolute', top: '17%', left: '20%' }}>{arr[1] > 0 ? arr[1] : ''}</div>
          <div style={{ gridColumn: 3, gridRow: 2, fontSize: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>{arr[2] > 0 ? arr[2] : ''}</div>
          <div style={{ gridColumn: 3, gridRow: 3, fontSize: '48px', position: 'absolute', top: '17%', left: '20%' }}>{arr[3] > 0 ? arr[3] : ''}</div>
          <div style={{ gridColumn: 2, gridRow: 3, fontSize: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>{arr[4] > 0 ? arr[4] : ''}</div>
          <div style={{ gridColumn: 1, gridRow: 3, fontSize: '48px', position: 'absolute', top: '17%', left: '20%' }}>{arr[5] > 0 ? arr[5] : ''}</div>
          <div style={{ gridColumn: 1, gridRow: 2, fontSize: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>{arr[6] > 0 ? arr[6] : ''}</div>
          <div style={{ gridColumn: 1, gridRow: 1, fontSize: '48px', position: 'absolute', top: '17%', left: '20%' }}>{arr[7] > 0 ? arr[7] : ''}</div>
        </div>
      </div>
    </div>
  ), [arr]);
}
function Warning(){
  const[ful,setfull]=useRecoilState(full);
  return useMemo(()=>{
    return <div style={{ margin: '10px', fontSize: '15px', fontFamily: '-moz-initial', color: 'red', display: 'flex', justifyContent: 'center' }}>
    <h3>{ful}</h3>
  </div>
  },[ful])
}

export default App;
