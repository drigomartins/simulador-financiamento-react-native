import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
    display: flex;
    width: 100%;
    background-color: #F8F8FF;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 5px 15px;
    position: relative;
    margin-bottom: 20px;
`
const StyledText = styled.Text`
    color: #808080;
    font-size: 12px;
    text-align: left;
    width: 100%;
    padding-top: 5px;
`
const StyledIcon = styled.Text`
    color: #808080;
    font-size: 15px;
    text-align: left;
    position: absolute;
    left: 15px;
    top: 36px;
`
const StyledTextInput = styled.TextInput`
    text-align: left;
    width: 100%;
    height: 40px;
    padding-left: ${({money,percent}) => money ? '25px' : percent ? '25px' : '0px'};
`

export const Input = (props) => {
    return (
        <StyledView>
            <StyledText>{props?.title}</StyledText>
            {props?.money && <StyledIcon>R$</StyledIcon> }
            {props?.percent && <StyledIcon>%</StyledIcon> }
            <StyledTextInput
                {...props}
                money={props?.money}
            />
            <StatusBar style="auto" />
        </StyledView>
    )
}
export default Input
