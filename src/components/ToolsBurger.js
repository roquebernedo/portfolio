import React from 'react'

const ToolsBurger = ({ titleTools, mainChildren, additionalChildren}) => {
    return (
        <div className="tools-burger">
            <div className='end'>
                <div className='text'>
                    {titleTools}
                </div>
            </div>
            <div className='top-fav'>
                <div className="text-select-all">
                    {mainChildren}
                </div>
                <div className="text-select-all">
                    {additionalChildren}
                </div>
            </div>
        </div>
    )
}

export default ToolsBurger