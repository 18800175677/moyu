import React from 'react';
import './index.less';

const LoadingEight = () => {
    return <div className="loading_item loading_eight">
        <p className="item1" style={{ '--index': 0 }}></p>
        <p className="item2" style={{ '--index': 1 }}></p>
        <p className="item3" style={{ '--index': 2 }}></p>
        <p className="item4" style={{ '--index': 3 }}></p>
        <p className="item5" style={{ '--index': 4 }}></p>
        <p className="item4" style={{ '--index': 5 }}></p>
        <p className="item3" style={{ '--index': 6 }}></p>
        <p className="item2" style={{ '--index': 7 }}></p>
        <p className="item1" style={{ '--index': 8 }}></p>
    </div>;
};

export default LoadingEight;