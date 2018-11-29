import React from 'react';

export default(props) => {
    return <img height='100%' width='100%'  src={`https://movie.miguvideo.com${props.src}`} alt=""/>
}