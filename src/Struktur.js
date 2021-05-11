import React from 'react';
import Introduktion from './components/Introduction/Introduktion';
import Demografi from './components/Demographics/Demografi';
import Demografi2 from './components/Demographics/Demografi2';
import Video from './components/Video/VideoInstruks';
import ForsteSide from './components/Google_Login/ForsteSide';
import Remedier from './components/Remeider/Remedier';
import Instruks from './components/Instruks/Instruks';
import Forsog from './components/Forsog/Forsog';
import Forsog2 from './components/Forsog/Forsog2';
import Forsog3 from './components/Forsog/Forsog3';
import Forsog4 from './components/Forsog/Forsog4';
import Forsog5 from './components/Forsog/Forsog5';


import PostSporgsmal from './components/PostSporgsmal/PostSporgsmal';
import PostSporgsmal2 from './components/PostSporgsmal/PostSporgsmal2';
import Afslutning from './components/Afslutning/Afslutning';



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

const PageTwo = () => {
    return (<div>
        <Demografi />

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
        <Forsog />
    </div>
};


const PageSeven = () => {
    return <div>
        <Forsog2 />
    </div>
};

const PageSevenDotOne = () => {
    return <div>
        <Forsog3 />
    </div>
};


const PageSevenDotTwo = () => {
    return <div>
        <Forsog4 />
    </div>
};

const PageSevenDotThree = () => {
    return <div>
        <Forsog5 />
    </div>
};


const PageEight = () => {
    return <div>
        <PostSporgsmal />
    </div>
};

const PageEightDotOne = () => {
    return <div>
        <PostSporgsmal2 />
    </div>
};

const PageNine = () => {
    return <div>
        <Afslutning />
    </div>
};


export { PageOneOne, PageOne, PageTwo, PageTwoDotFive, PageThree, PageFour, PageFive, PageSix, PageSeven, PageSevenDotOne, PageSevenDotTwo,PageSevenDotThree, PageEight,PageEightDotOne, PageNine }
