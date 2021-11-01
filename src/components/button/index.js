import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
    width: 100%;
    margin-bottom: 20px;
`
const StyledButton = styled.View`
    width: 100%;
    height: 46px;
    border-radius: 20px;
    background-color: ${({active}) => active ? '#000' : '#656565'};
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledText = styled.Text`
    color: #FFF;
    font-size: 20px;
`

export const Button = (props) => {
    return (
        <StyledView>
            <StyledButton active={props?.active}>
                <StyledText>{props?.title}</StyledText>
            </StyledButton>
            <StatusBar style="auto" />
        </StyledView>
    )
}
export default Button
