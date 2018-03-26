import React from 'react';

export function CheckWaterState(props){
    if(props.celsius <= 0){
        return <p>Water Come to Ice</p>
    }else if(props.celsius>=100){
        return <p>Water come to Gas</p>
    }else return <p>Water Normal State</p>
}