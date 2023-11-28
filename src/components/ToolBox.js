import React from 'react'

const ToolBox = ({ toolClass, imgIcon, toolName}) => {
    return (
        <div className='common-box'>
            <div className='div-icon'><img className={toolClass} src={imgIcon} alt=''/></div>
            <div className='common-name'>{toolName}</div>
        </div>
    )
}

export default ToolBox