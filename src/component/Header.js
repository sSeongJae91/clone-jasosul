import React from 'react';
import styled from 'styled-components';

function Header() {
    
    return (
        <HeaderStyle>
            <div className="gnb">
                <div className="logo-area">
                    <a href="/">
                        <img className="logo" src="https://jasoseol.com/assets/main/logo-09e69cf256e09481f42047f3f655395c3cfb1669f81be7172f104e86e7b49a7c.png"/>
                    </a>
                </div>
                <div className="tab_center">
                    <div className="tab_button recruit">채용 공고</div>
                    <div className="tab_button resume">자기소개서</div>
                    <div className="tab_button spec">이력서</div>
                    <div className="tab_button datalab">데이터랩</div>
                    <div className="tab_button passresume">합격자소서</div>
                    <div className="tab_button">실무경험 채우기</div>
                </div>
                <div className="tab_right">
                    <div className="sign-in-button">
                        로그인
                    </div>
                    <div className="business-link-button">
                        <a>기업서비스</a>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    img {
        vertical-align: middle;
    }

    .gnb {
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        padding: 0 30px;
        border-bottom: 1px solid #EEE;
        z-index: 101;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        font-family: 'Noto Sans CJK KR', sans-serif;
        color: #707070;
    }

    .gnb .logo-area .logo {
        width: 120px;
    }

    .gnb .tab_center {
        display: flex;
        flex-wrap: nowrap;
        margin: 0 30px;
        font-size: 16px;
        white-space: nowrap;
    }

    .gnb .tab_right {
        display: flex;
        align-items: center;
    }

    .gnb .tab_right .sign-in-button {
        font-size: 16px;
        margin-right: 6px;
        cursor: pointer;
        white-space: nowrap;
    }

    .gnb .tab_right .business-link-button {
        margin-left: 12px;
        height: 30px;
        width: 86px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        font-size: 14px;
        border: 1px solid #EEE;
        border-radius: 15px;
        background-color: #FFF;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
    }

    .gnb .tab_right .business-link-button a {
        color: inherit;
    }

    .gnb .tab_center .tab_button {
        position: relative;
        margin: 0 15px;
        cursor: pointer;
    }
`;

export default Header;