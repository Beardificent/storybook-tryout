import React from 'react';
import './Center.css';
//rsf + tab to instantly create a function component template

function Center(props) {
    return (
        <div className="center">
            {props.children}
        </div>
    );
}

export default Center;
