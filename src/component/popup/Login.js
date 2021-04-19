import React, { useState } from 'react';
import styled from 'styled-components';

function Login({callbackPop}) {

    const [tabMode, setTabMode] = useState('1');
    const [signUpClassName, setSignUpClassName] = useState('sign-button sign-up');
    const [loginClassName, setLoginClassName] = useState('sign-button sign-in active');

    function closeLoginPopup(e) {

        e.stopPropagation();
        e.preventDefault();
        
        console.log("target className : " + e.target.className);
        if(e.target.className !== 'modal-window') {
            return;
        }

        callbackPop(false);
    }

    function clickTab(mode) {
        // console.log("mode", mode);
        switch(mode) {
            case '1' :
                setTabMode('1');
                setSignUpClassName('sign-button sign-up active');
                setLoginClassName('sign-button sign-in');
                return;
            case '2' :
                setTabMode('2');
                setSignUpClassName('sign-button sign-up');
                setLoginClassName('sign-button sign-in active');
                return;
            default:
                return;
        }
    }

    return (
        <LoginStyle>
            <div className="modal-window" onClick={(e) => closeLoginPopup(e)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="sign-modal">
                            <div className="sign">
                                <div className="buttons">
                                    <div className={signUpClassName} onClick={() => clickTab('1')}>
                                        회원가입
                                    </div>
                                    <div className={loginClassName} onClick={() => clickTab('2')}>
                                        로그인
                                    </div>
                                </div>
                                <div className="sign-form">
                                    {tabMode === '1'?(
                                        <div className="sign-up-form">
                                            <div className="sign-type-social-media">
                                                <div className="sign-type-title">
                                                    SNS 계정으로 가입
                                                </div>
                                                <div>
                                                    <div className="sign-type-sign-button sign-up-with-naver">
                                                        <img src="https://jasoseol.com/assets/index/icon-naver-4a5102d8e6ad9a51ce2706bd02264fd51a595377c87179b2dc319246d19833b1.png"/>
                                                        네이버로 가입
                                                    </div>
                                                    <div className="sign-type-sign-button sign-up-with-facebook">
                                                        <img src="https://jasoseol.com/assets/index/icon-facebook-96289ffadc664e70ebad8677538f71262ebdffd0304f694891dd838a93b5dc51.png"/>
                                                        페이스북으로 가입
                                                    </div>
                                                    <div className="sign-type-sign-button sign-up-with-apple">
                                                    <img src="https://jasoseol.com/assets/index/icon-apple-white-f438bd15a193e358d98393973b5ac11e3b40e11adcc2ca758ccdd2b54a8a07b9.png"/>
                                                        Apple로 가입
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sign-type-email">
                                                <div className="sign-type-title">
                                                    이메일 주소로 가입
                                                </div>
                                                <div className="sign-type-email-inputs">
                                                    <input type="email" placeholder="이메일"/>
                                                    <input type="password" placeholder="비밀번호"/>
                                                    <input type="password" placeholder="비밀번호 재입력"/>
                                                </div>
                                                <div className="agree-terms">
                                                    회원가입 시
                                                    <strong>
                                                        <a href="/terms">이용약관</a>
                                                    </strong>
                                                    에 동의하게 됩니다.
                                                </div>
                                                <div className="sign-type-sign-button sign-up-with-email">
                                                    <img src="https://jasoseol.com/assets/index/mail_icon@2x-b9ad3010f6c25fcc0af0729e002024937a5c1f9d3f02d911ad8d648839de5384.png"/>
                                                    이메일로 가입
                                                </div>
                                            </div>
                                        </div>
                                    ):(
                                        <></>
                                    )}
                                </div>
                                {tabMode ==='1'? (
                                    <a className="business-sign-link" href="/business_user/sign-up">기업 회원 가입</a>
                                ):(
                                    <a className="business-gisn-link" href="/business_user/sign-in">기업 회원 로그인</a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginStyle>
    )
}

const LoginStyle = styled.div`
    .modal-window {
        /* width: 100vw;
        height: 100vh; */
        position: fixed;
        margin: 0;
        display: inline-block;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2) !important;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .sign {
        float: right;
    }

    .modal-window:before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .modal-window .modal-dialog {
        transform: translate3d(0, 0, 0);
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        width: 340px;
        height: 555px;
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        text-align: left;
    }

    .modal-dialog {
        position: relative;
        width: auto;
        margin: 10px;
    }

    .modal-content {
        box-shadow:none;
        border: 0;
        background: transparent;
        position: relative;
        border-radius: 6px;
        outline: 0;
    }

    .modal-window .buttons {
        background: #d8d8d8;
        border-radius: 4px 4px 0 0;
        border : 1px solid #d8d8d8;
        border-bottom: 0;
    }

    .buttons ::after {
        content: "";
        display: block;
        clear: both;
    }

    .sign-button {
        width: 50%;
        margin: 0 !important;
        text-align: center;
        border: 0;
        height: 50px;
        line-height: 40px;
        font-size: 18px;
        padding: 0;
        background: #d8d8d8;
        color: #777;
        font-weight: normal;
        cursor: pointer;
        text-decoration: none;
        border-radius: 4px;
        display: inline-block;
    }

    .sign-button .sign-up {
        border-radius: 4px 4px 0 0;
    }

    .sign-button .sign-in {
        border-radius: 4px 0 4px 0;
    }

    .buttons .sign-button.active {
        color: #ff6813;
        background: #fafafa;
        font-weight: bold;
    }

    .modal-window .modal-dialog .modal-content .sign-modal .sign-form {
        border-top: 0;
        border-radius: 0 0 4px 4px;
    }

    .sign-modal .sign-form {
        position: relative !important;
        top: auto;
        border-top: 0;
        border-radius: 0 0 4px 4px;
    }

    .sign-form {
        border-top: 0;
        border-radius: 4px;
        position: absolute;
        top: 55px;
        z-index: 1000;
        right: 0;
        border: 1px solid #d8d8d8;
        background: #fafafa;
        padding: 15px;
        width: 340px;
    }

    .sign-up-form div {
        color: #999;
    }

    .sign-up-form .sign-type-social-media {
        margin-top: 10px;
    }

    .sign-type-title {
        font-size: 15px;
        font-weight: bold;
        color: #999;
    }

    .sign-form img {
        width: 28px;
        height: 28px;
        margin-right: 5px;
        vertical-align: middle;
        border: 0;
    }

    .sign-type-sign-button {
        width: 100%;
        height: 50px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        line-height: 48px;
        font-size: 16px;
        background: #fff;
        cursor: pointer;
        color: #777;
        padding-left: 72px;
        margin-bottom: 0px;
    }

    .sign-up-form .sign-up-with-naver{
        background: #2cc622;
        color: #fff;
        border: 0;
        padding-left: 60px;
    }

    .sign-up-form .sign-up-with-facebook{
        background: #3b579d;
        color: #fff;
        border: 0;
    }

    .sign-up-form .sign-up-with-apple{
        background: black;
        color: white;
        border: none;
        padding-left: 55px;
    }

    .sign-type-email {
        margin-top: 30px;
    }

    .sign-type-email-inputs input {
        display: block;
        width: 100%;
        height: 50px;
        margin: 10px 0;
        padding: 0 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .agree-terms {
        text-align: center;
        font-size: 12px;
    }
    .agree-terms a {
        color: #999;
        text-decoration: none;
    }

    .business-sign-link {
        display: flex;
        width: 100%;
        height: 50px;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        border: 1px solid #bbb;
        border-radius: 3px;
        color: #fff;
        background: rgba(0,0,0,0.2);
        text-decoration: none;
    }

    *::before *::after {
        box-sizing: border-box;
    }
`
;

export default Login;