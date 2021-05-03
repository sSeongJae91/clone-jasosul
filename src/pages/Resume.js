import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import styled from 'styled-components';

//material ui
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

function Resume() {

    const {user} = useContext(AuthContext);

    let name ='';

    if(user) {
         name = user.email.substring(0, user.email.indexOf('@'));
    }

    const dropDown = React.createRef();
    const dropDownView = React.createRef();
    
    console.log(name);

    const dropDownClick = (e) => {
        const display = dropDown.current.style.display;

        if(display === 'block') {
            dropDown.current.style.display = 'none';
        }else {
            dropDown.current.style.display = 'block';
        }
    }

    const dropDownClickView = (e) => {
        const display = dropDownView.current.style.display;

        if(display === 'block') {
            dropDownView.current.style.display = 'none';
        }else {
            dropDownView.current.style.display = 'block';
        }
    }

    return (
        <>
        <ResumeStyle>
            {user ? (
                <div className="main-tab">
                    <div className="resume-list-ctrl">
                        <div className="resume-list-container">
                            <div className="resume-list-header">
                                <div className="header-left">
                                    <div className="list-name">
                                        <span>{name}</span>님의 자기소개서
                                    </div>
                                </div>
                                <div className="header-right">
                                    <div className="search-resume">
                                        <i className="material-icons"><SearchIcon/></i>
                                        <input type="search" placeholder="제목, 내용을 검색하세요."/>
                                    </div>
                                    <div className="button-container">
                                        <div className="trash-bin">
                                            <i className="material-icons"><DeleteIcon/></i>
                                        </div>
                                        <div className="trash-bin-notice">
                                            <div className="notice-inner">
                                                <div className="notice-content">
                                                    <i className="material-icons"><DeleteIcon/></i>
                                                    <div>
                                                        삭제한 파일은 
                                                        <br/>
                                                        휴지통에 보관됩니다.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <div className="new-folder">
                                            <i className="material-icons"><CreateNewFolderIcon/></i>
                                        </div>
                                    </div>
                                    <div className="scheduler-resume-list-sort">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" onClick={dropDownClick}>
                                                <i className="material-icons"><ImportExportIcon/></i>
                                            </a>
                                            <ul className="dropdown-menu" ref={dropDown}>
                                                <li>이름</li>
                                                <li>마감일</li>
                                                <li>수정</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="change-resume-list-mode">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" onClick={dropDownClickView}>
                                                <i className="material-icons"><ViewModuleIcon/></i>
                                            </a>
                                            <ul className="dropdown-menu" ref={dropDownView}>
                                                <li>스케쥴러 보기</li>
                                                <li>그리드 보기</li>
                                                <li>리스트 보기</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="new-resume-button">+ 새 자소서</div>
                                </div>
                            </div>
                            <div className="resume-category-container">
                                <div className="resume-category-counter"></div>
                            </div>
                            <div className="resume-list-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <></>
            )}
        </ResumeStyle>
        </>
    )
}

const ResumeStyle = styled.div `

    .main-tab {
        position: relative;
        top: 50px;
        height: calc(100% -50px);
        overflow-y: auto;
        transition: width 0.5s;
    }

    .resume-list-ctrl {
        display: flex;
        height: 100%;
        overflow-y: auto;
    }

    .resume-list-container {
        min-height: 680px;
        padding: 30px 30px 30px 30px;
        width: 100%;
    }

    .resume-list-header {
        height: 40px;
    }

    .resume-list-header .header-left {
        float: left;
    }

    .resume-list-header .header-right {
        position: relative;
    }

    .header-left .list-name {
        font-size: 16px;
        font-weight: bold;
        color: #999;
    }

    .header-left .list-name span {
        font-size: 18px;
        color: #ff6813;
    }

    .header-right > div {
        float: right;
        height: 35px;
        background: white;
        color: #999999;
        font-size: 13px;
        border-radius: 3px;
        border: 1px solid #DDDDDD;
    }

    .search-resume {
        margin-left: 10px;
        width: 200px;
        right: 0;
    }

    .search-resume i {
        padding-left: 5px;
        line-height: 35px;
        float: left;
    }

    .search-resume input {
        float: left;
        width: calc(200px - 35px);
        padding-left: 3px;
        font-size: 12px;
        border: none;
        background: transparent;
        outline: none;
        height: 100%;
        color: #333;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: nowrap;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: 'liga';
        font-feature-settings: 'liga';
    }

    .header-right .button-container {
        width: 35px;
        margin-left: 10px;
    }

    .trash-bin {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .trash-bin-notice {
        display: none;
        position: absolute;
        z-index: 1000;
        top: 45px;
        left: 117px;
        background: #3F4D5E;
        color: #ffffff;
        padding: 15px;
        border: 1px solid #3F4D5E;
        border-radius: 4px;
        width: 170px;
        height: 65px;
    }

    .notice-content {
        display: inline-block;
        text-align: left;
    }

    .notice-content i {
        font-size: 24px;
        position: absolute;
        top: 19px;
        left: 13px;
    }

    .notice-content div {
        display: inline;
        position: absolute;
        top: 15px;
        font-size: 12px;
        right: 14px;
    }

    .new-resume-button {
        color: #777777;
        float: right;
        height: 35px;
        line-height: 35px;
        text-align: center;
        margin-right: 10px;
        padding: 0 10px;
        background: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        font-weight: normal;
    }

    .new-folder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .scheduler-resume-list-sort {
        float: right;
        cursor: pointer;
        width: 35px;
        color: #999999;
        margin-left: 10px;
    }

    .change-resume-list-mode {
        float: left;
        cursor: pointer;
        width: 35px;
        color: #999999;
    }

    .dropdown {
        position: relative;
    }

    .dropdown-toggle i {
        color: #999999;
        line-height: 35px;
        width: 100%;
        text-align: center;
    }

    .resume-list-sort .dropdown-menu {
        padding-top: 10px;
        padding-bottom: 0px;
    }

    .dropdown-menu .open {
        display: block;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        float: left;
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0 ;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #ffffff;
        border: 1px solid rgba(0,0,0,0,0.15);
        border-radius: 4px;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        background-clip: padding-box;
    }

    a {
        color: #428bca;
        text-decoration: none;
        background: transparent;
    }
`;

export default Resume;