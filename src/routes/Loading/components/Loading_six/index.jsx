import React from 'react';
import './index.less';

const LoadingSix = () => {
    return <div className="loading_six loading_item">
        <p style={{"--index" : 0}}></p>
        <p style={{"--index" : 1}}></p>
        <p style={{"--index" : 2}}></p>
        <p style={{"--index" : 3}}></p>
    </div>;
};

export default LoadingSix;