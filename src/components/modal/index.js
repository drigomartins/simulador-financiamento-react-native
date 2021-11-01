import React from 'react';
import styled from 'styled-components/native';
import { useData } from '../../utils/context/general';
import formatValue from '../../utils/format/money';

const StyledView = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end
`
const StyledBox = styled.View`
    width: 100%;
    height: 600px;
    background-color: #FFF;
    border-radius: 20px;
    margin-bottom: -20px;
`
const StyledContent = styled.View`
    margin: 15px;
    border-style: solid;
    border-color: #363636;
    border-width: 2px;
    border-radius: 10px;
    padding: 15px;
`
const AlignClose = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 10px;
`
const Title = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #363636;
`
const SubTitle = styled.Text`
    width: 100%;
    font-size: 15px;
    padding: 15px;
    color: #363636;
`
const Value = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #363636;
    font-weight: bold;
`
const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
}
export const Drawer = ({onPress}) => {
    const { data } = useData();
    const productValue = Number(data?.productValue)
    const entryValue = Number(data?.entryValue)
    const months = Number(data?.months)
    const fees = Number(data?.fees)

    const total = productValue - entryValue

    const portion = (total / months) * fees

    const totalFees = portion * months

    return (
        <StyledView>
            <StyledBox style={shadow}>
                <AlignClose>
                    {onPress}
                </AlignClose>
                <Title>Resultado da simulação</Title>
                <StyledContent>
                    <SubTitle>Valor total a ser financiado:</SubTitle>
                    <Value>R$ {formatValue(total)}</Value>
                    <SubTitle>Valor da parcela:</SubTitle>
                    <Value>R$ {formatValue(portion)}</Value>
                    <SubTitle>Valor total com juros:</SubTitle>
                    <Value>R$ {formatValue(totalFees)}</Value>
                </StyledContent>
            </StyledBox>
        </StyledView>
    )
}
export default Drawer
