import React from 'react';
import Introduktion from './components/Introduction/Introduktion';
import Demografi2 from './components/Demographics/Demografi2';
import Video from './components/Video/Video';
import ForsteSide from './components/Google_Login/ForsteSide';
import Remedier from './components/Remeider/Remedier';
import Instruks from './components/Instruks/Instruks';
import Instruks1 from './components/Instruks/Instruks1';
import Instruks2 from './components/Instruks/Instruks2';


const PageOneOne = () => {
    return (
        <div className="Hej">
            <ForsteSide />
        </div>
    );
};

const PageOne = () => {
    return (
        <div className="Hej">
            <Introduktion />
        </div>
    );
};

const PageTwoDotFive = () => {
    return (<div>
        <Demografi2 />

    </div>
    );
};
const PageThree = () => {
    return <div>
        <Remedier />
    </div>
};

const PageFour = () => {
    return <div>
        <Video />
    </div>
};

const PageFive = () => {
    return (
        <div>
            <Instruks />
        </div>
    )
};
const PageSix = () => {
    return <div>
        <Instruks1 />
    </div>
};


const PageSeven = () => {
    return <div>
        <Instruks2 />
    </div>
};

export { PageOneOne, PageOne, PageTwoDotFive, PageThree, PageFour, PageFive, PageSix, PageSeven }