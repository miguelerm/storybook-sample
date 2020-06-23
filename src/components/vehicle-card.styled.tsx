import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 236px;
    -ms-flex: 0 0 236px;
    flex: 0 0 236px;
    max-width: 236px;
    border: 1px solid rgba(0,0,0,0.2);
    margin: 0 30px 30px 0;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    position: relative;

    font-size: 16px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
`;

export const RemoveButton = styled.div`
    z-index: 20;
    cursor: pointer;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
    height: 25px;
    background-color: rgba(0,0,0,0.5);
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    padding: 5px;
    color: #FFF;
    -webkit-border-radius: 3px;
    border-radius: 3px;
`;

const Svg = styled.svg`
    display: block;
    width: 18px;
    height: 18px;
    margin-left: 5px;
    overflow: hidden;
`;

export const RemoveIcon = () => <Svg viewBox="0 0 19.799 19.799">
<path d="M64,6a1.235,1.235,0,0,1,1.235,1.235v4.529h4.53a1.235,1.235,0,0,1,0,2.471h-4.53v4.53a1.235,1.235,0,1,1-2.471,0v-4.53H58.235a1.235,1.235,0,0,1,0-2.471h4.529V7.235A1.235,1.235,0,0,1,64,6Z" transform="translate(-26.163 -44.548) rotate(45)" fill="#fff" fill-rule="evenodd"/>
</Svg>;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-style: none;
`;

export const Title = styled.p`
    margin: 0;
    padding: 15px;
    border-top: 1px solid rgba(0,0,0,0.2);
    font-size: 14px;
    line-height: 16px;
    color: #000;
`

export const SubTitle = styled.strong`
    display: block;
    font-size: 16px;
    line-height: 19px;
    margin-top: 5px;`;