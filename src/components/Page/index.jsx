import React from 'react';
import './index.less';

const Page = ({
    children
}) => {
    return <div className="container-page">
        <div className="_mask">
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
            <p>love</p>
        </div>
        <div className="_container">
            {
                children
            }
        </div>
    </div>;
};

export default Page;