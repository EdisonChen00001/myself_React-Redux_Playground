import React from 'react';

export function NameList(props){
    const namelist = props.namelist;
    const printlist = namelist.map((x) =>
        <li>x</li>
    )
    return <ul>{printlist}</ul>
}