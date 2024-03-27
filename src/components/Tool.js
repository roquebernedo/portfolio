import React from 'react'

const Tool = ({ color, tool }) => {
    return(
        <div style={{ 'color': '#00cdac', 'border': '#00cdac solid 2px' }} className='tool'>{tool}</div>
    )
}
export default Tool