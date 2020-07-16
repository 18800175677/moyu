import React from 'react';
import './index.less';

const LoadingFour = () => {
    return <div className="loading_item loading_four">
        <svg width="160" height="160">
            <circle className="circle" cx="80" cy="80" r="60"></circle>
        </svg>
    </div>;
};

export default LoadingFour;