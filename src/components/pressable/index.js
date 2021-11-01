import React from 'react';
import { Pressable } from "react-native";
import styled from 'styled-components/native';

import Button from '../components/button';

const Trace = styled.View`
    width: 100px;
    height: 5px;
    background-color: #A9A9A9;
    border-radius: 2px;
    margin-left: -15px;
`
const Months = styled.Text`
    width: 70px;
    padding: 5px;
    border-radius: 20px;
    background-color: #656565;
    margin-right: 5px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
`

export const CustomPressable = (props) => {
    const types = {
        months: <Pressable {...props}><Months>{props?.value}</Months></Pressable>,
        trace: <Pressable {...props}><Trace /></Pressable>,
        button: <Pressable {...props}><Button title="Calcular" active /></Pressable>
    }

    return types[props?.type] || <></>
}
export default CustomPressable
