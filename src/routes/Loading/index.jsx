import React from 'react';
import './index.less';

import LoadingOne from './components/Loading_one';
import LoadingTwo from './components/Loading_two';
import LoadingThree from './components/Loading_three';
import LoadingFour from './components/Loading_four';
import LoadingFive from './components/Loading_five';
import LoadingSix from './components/Loading_six';
import LoadingSeven from './components/Loading_seven';
import LoadingEight from './components/Loading_eight';
import LoadingNine from './components/Loading_nine';

const Loading = () => {
    return <div className="loading-page">
        <LoadingOne />
        <LoadingTwo />
        <LoadingThree />
        <LoadingFour />
        <LoadingFive />
        <LoadingSix />
        <LoadingSeven />
        <LoadingEight />
        <LoadingNine />
    </div>;
};

export default Loading;