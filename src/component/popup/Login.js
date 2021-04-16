import React from 'react';
import styled from 'styled-components';

function Login() {

    return (
        <LoginStyle>
            <div className="modal-dialog">
                <div className="buttons">
                    <div className="sign-button sign-up">
                        회원가입
                    </div>
                    <div className="sign-button sign-in">
                        로그인
                    </div>
                </div>
            </div>
        </LoginStyle>
    )
}

const LoginStyle = styled.div`
    .modal-dialog {
        transform: translate3d(0, 0, 0);
        width: 100vw;
        height: 100vh;
        position: fixed;
        margin: 0;
        display: inline-block;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.2) !important;
        display: block;
    }
`
;

export default Login;