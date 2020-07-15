import React from 'react';
import './index.less';
import classNames from 'classnames';

const Container = ({
    children,
    history,
    routes
}) => {
    const to = (path) => {
        if (history.location.pathname === path) return;
        history.push(path);
    };
    return <div className="container">
        <div className="top">
            <span className="title_text">{'这里是导航栏--->'}</span>
            {
                routes.map(item => {
                    return <div
                        className={classNames("link_item", {
                            'active': history.location.pathname === item.path
                        })}
                        onClick={() => to(item.path)}
                    >
                        {item.name}
                    </div>;
                })
            }
        </div>
        <div className="body_container">
            {children}
        </div>
    </div>;
};
export default Container;