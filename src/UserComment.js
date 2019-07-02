import React from 'react'

const UserComment = props => {
    return (
        <div className='comment'>
            <a className={ 'avatar' }>
                <img src={ props.image } alt='avatar'/>
            </a>
            <div className='content'>
                <a className='author'>
                    { props.name }
                </a>
                <div className='metadata'>
                        <span className='date'>
                            {props.time}
                        </span>
                </div>
                <div className='text'>
                    { props.text }
                </div>
            </div>
        </div>
    )
}

export default UserComment