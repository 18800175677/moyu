import React, { useState } from 'react';
import './index.less';
import classNames from 'classnames';

const Container = ({
    children,
    history,
    routes
}) => {
    const [pathname, setPathname] = useState(history.location.pathname);
    const to = (path) => {
        if (pathname === path) return;
        setPathname(path);
        history.push(path);
    };
    return <div className="container">
        <div className="top">
            <span className="title_text">{'这里是导航栏--->'}</span>
            {
                routes.map(item => {
                    return <div
                        className={classNames("link_item", {
                            'active': pathname === item.path
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