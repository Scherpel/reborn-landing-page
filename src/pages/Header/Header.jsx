import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './static/images/header-logo.png'
import { FormattedHTMLMessage } from "react-intl";
// import art from './static/images/header-art.png';
// import artmob from './static/images/header-artmob.png';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;

export default function Header(props) {
  return (
    <header {...props} className="session-header">
      <ScrollOverPack id="hero" className='header-content'>
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          <div className="header">
            <div className="logo">
              <Link to="/" style={{display:"block"}}>
                <img alt="logo"   /><br/>              
              </Link>
            </div>
            <div className="artmob">
              {/* <img alt="art" src={`${artmob}`} /> */}
            </div>
          </div>
        </TweenOne>
        <QueueAnim key="1">
          <div className="content">
            <h1 key="h1">
              <FormattedHTMLMessage id="app.home.session.header.title" />
            </h1>
            <p key="p">
              <FormattedHTMLMessage id="app.home.session.header.description" />
            </p>
            <div className='button'>
           
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
      <div className="art">
        {/* <img alt="art" src={`${art}`} /> */}
      </div>
    </header>
  );
}
