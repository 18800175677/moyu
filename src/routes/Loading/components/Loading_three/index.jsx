import React from 'react';
import './index.less';

const LoadingThree = () => {
    return <div className="loading_three loading_item">
        <svg width="160" height="160">
            <circle class="mouth" cx="80" cy="80" r="60"></circle>
            <circle class="eye" cx="80" cy="80" r="60"></circle>
        </svg>
    </div>
}

export default LoadingThree;