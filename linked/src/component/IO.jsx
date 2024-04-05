import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil'; // Import RecoilRoot and useRecoilState
import { mainarr, state , full } from './State';
export function Input() {
  const [value, setvalue] = useRecoilState(state); // Use useRecoilState for state management
  const [arr ,setarr] = useRecoilState(mainarr);
  const [ful,setfull]=useRecoilState(full);
  const Adding = () => {
    fetch(`http://localhost:3000/add?input=${value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       if(data==="queue is full"){
        setfull(data);
       }else{
          setarr(data);
       }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const Deleting = () => {
    fetch('http://localhost:3000/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'Queue is empty') {
          //
        } else {
          // Update state
          setarr(data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <RecoilRoot>
        <div style={{ width: '300px', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Enter the input here.."
            style={inputStyle}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={buttonStyle} onClick={Adding}>
            Add Element
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontFamily: '-moz-initial', fontSize: '35px' ,alignItems:'center',height:'160px'}}>
          <h2>OR</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={buttonStyle} onClick={Deleting}>
            Delete Element
          </button>
        </div>
      </RecoilRoot>
    </div>
  );
}

const inputStyle = {
  margin: '10px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '20px',
  width: '400px',
  outline: 'none',
};

const buttonStyle = {
  margin:'10px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  outline: 'none', // Remove the default blue outline
};
