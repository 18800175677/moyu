import React from 'react';
import './index.less';

const LoadingTwo = () => {
    return <div className="loading_two loading_item">
        <div className="loading_container">
            <p className="item left_top"></p>
            <p className="item right_top"></p>
            <p className="item left_bottom"></p>
            <p className="item right_bottom"></p>
        </div>
    </div>;
};

export default LoadingTwo;