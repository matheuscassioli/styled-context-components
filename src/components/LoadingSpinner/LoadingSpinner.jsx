import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
    return (
        <ReactLoading
            type={'spokes'}
            color={'white'}
            height={'unset'}
            width={'15%'} 
        />
    )
}

export default LoadingSpinner