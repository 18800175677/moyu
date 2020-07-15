import React from 'react';
import './index.less';

import LoadingOne from './components/Loading_one';
import LoadingTwo from './components/Loading_two';
import LoadingThree from './components/Loading_three';

const Loading = () => {
    return <div className="loading-page">
        <LoadingOne />
        <LoadingTwo />
        <LoadingThree />
    </div>;
};

export default Loading;