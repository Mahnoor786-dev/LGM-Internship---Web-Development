import React from 'react'

export default function Button(props) {

    // if((props.symbol>=0)&&(props.symbol<=9))
    // {
        
    // }

    return (
            <div>
                <button className={((props.symbol>=0)&&(props.symbol<=9))? "operand button":"operator button"}  onClick={() => props.handleClick(props.symbol)}  > {props.symbol}</button>
            </div>
    )
}