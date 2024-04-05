import '../App.css'
import { mainarr } from './State'
export function Queue(){
    const arr = mainarr;
    let value=0;
    console.log(arr);
    return <div>
        <div className="Parent">
            <div className="Grid-container">
                <div className="Circle">
                    <div className="Circle2"></div>
                </div>
                <div style={{gridColumn:2,gridRow:1,fontSize:'48px',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}}>{arr[0]=arr[0]>0 ? arr[0]:""}</div>
                <div style={{gridColumn:3,gridRow:1,fontSize:'48px',position:'absolute',top:'17%',left:'20%'}}>{value = arr[1]>0 ? arr[1]:""}</div>
                <div style={{gridColumn:3,gridRow:2,fontSize:'48px',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}}>{value = arr[2]>0 ? arr[2]:""}</div>
                <div style={{gridColumn:3,gridRow:3,fontSize:'48px',position:'absolute',top:'17%',left:'20%'}}>{value = arr[3]>0 ? arr[3]:""}</div>
                <div style={{gridColumn:2,gridRow:3,fontSize:'48px',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}}>{value = arr[4]>0 ? arr[4]:""}</div>
                <div style={{gridColumn:1,gridRow:3,fontSize:'48px',position:'absolute',top:'17%',left:'20%'}}>{value = arr[5]>0 ? arr[5]:""}</div>
                <div style={{gridColumn:1,gridRow:2,fontSize:'48px',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}}>{value =  arr[6]>0 ? arr[6]:""}</div>
                <div style={{gridColumn:1,gridRow:1,fontSize:'48px',position:'absolute',top:'17%',left:'20%'}}>{value =arr[7]>0 ? arr[7]:""}</div>
            </div>
        </div>
    </div>
}