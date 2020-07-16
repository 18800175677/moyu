import React from 'react';
import './index.less';

const LoadingSeven = () => {
    return <div className="loading_item loading_seven">
        <svg width="160" height="160">
            <circle cy="80" cx="80" r="60" className="circle1" style={{"--index": 0}}></circle>
            <circle cy="80" cx="80" r="50" className="circle2" style={{"--index": 1}}></circle>
            <circle cy="80" cx="80" r="40" className="circle3" style={{"--index": 2}}></circle>
            <circle cy="80" cx="80" r="30" className="circle4" style={{"--index": 3}}></circle>
        </svg>
    </div>;
};

export default LoadingSeven;