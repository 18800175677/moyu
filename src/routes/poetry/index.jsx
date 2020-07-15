import React, { useState } from 'react';
import './style.less';
import pinyin from './pinyin';

const getPy = (str) => {
    return pinyin.getFullChars(str).toLowerCase();
};
const arr = [
    '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
    '春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。',
    '巴山楚水凄凉地，二十三年弃置身。怀旧空吟闻笛赋，到乡翻似烂柯人。沉舟侧畔千帆过，病树前头万木春。今日听君歌一曲，暂凭杯酒长精神。'
];
const Poetry = (props) => {
    console.error(props);
    const [str, setStr] = useState('');
    const click = (index) => () => {
        setStr(arr[index]);
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') setStr(e.target.value);
    };
    return <div className="poetry">
        <div className="title">
            <span>请输入想打印的诗：</span>
            <div className="btns">
                <span className="btn" onClick={click(0)}>登高</span>
                <span className="btn" onClick={click(1)}>悯农</span>
                <span className="btn" onClick={click(2)}>酬乐天扬州初逢席上见赠</span>
            </div>
        </div>
        <textarea
            name="textarea"
            id="textarea"
            placeholder="请输入想打印的诗，用逗号或者句号分割"
            onKeyPress={onKeyPress}
        ></textarea>
        <div className="show">
            <div className="poetry-box" style={{ "--scale": 0.5 }}>
                {
                    str.split(/[,|，|.|。|?|？]/).map((item, index) => {
                        if (item.length) return <div className="box_body" key={index}>
                            {
                                item.split('').map((r, a) => r ? <div key={a}><p><ruby>{r}<rt>{getPy(r)}</rt></ruby></p></div> : null)
                            }
                        </div>;
                    })
                }
            </div>
        </div>
    </div>;
};

export default Poetry;