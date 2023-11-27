import React from 'react'

const ToolBox = ({ toolClass, imgIcon, toolName}) => {
    return (
        <div className='box-java common-box'>
            <div className='div-icon'><img className={toolClass} src={imgIcon} alt=''/></div>
            <div className='name-java common-name'>{toolName}</div>
        </div>
    )
}

export default ToolBox