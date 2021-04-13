import React from 'react';

function Header() {
    
    return (
        <HeaderStyle>
            <div className="gnb">
                <div className="logo-area">

                </div>
                <div className="tab_center">
                    
                </div>
                <div className="tab-right">
                    
                </div>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
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
        font-family: sans-serif;
        color: #707070;
    }
`;

export default Header;