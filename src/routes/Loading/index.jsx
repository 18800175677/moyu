import React from 'react';
import Page from '../../components/Page';
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
import LoadingTen from './components/Loading_ten';
import LoadingEleven from './components/Loading_eleven';
import LoadingTwelve from './components/Loading_twelve';

const Loading = () => {
    let timer = null;
    const loop = () => {
        if (window.L2Dwidget) {
            window.L2Dwidget.init({
                "display": {
                    "superSample": 2,
                    "width": 200,
                    "height": 400,
                    "position": "right",
                    "hOffset": 0,
                    "vOffset": 0
                }
            });
            clearInterval(timer);
        }
        else timer = setTimeout(loop, 300);
    };

    loop();
    return <Page>
        <div className="loading-page">
            <LoadingOne />
            <LoadingTwo />
            <LoadingThree />
            <LoadingFour />
            <LoadingFive />
            <LoadingSix />
            <LoadingSeven />
            <LoadingEight />
            <LoadingNine />
            <LoadingTen />
            <LoadingEleven />
            <LoadingTwelve />
        </div>
    </Page>;
};

export default Loading;