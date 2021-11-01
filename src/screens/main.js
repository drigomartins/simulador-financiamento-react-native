import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, View } from "react-native";
import styled from 'styled-components/native';

import { useData } from '../utils/context/general';

import formatOnlyNumbers from '../utils/format/onlyNumbers';
import formatValue from '../utils/format/money';

import Button from '../components/button';
import StyledModal from '../components/modal';
import Input from '../components/input';
import Pressable from '../components/pressable';

const StyledView = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    padding: 15px;
    position: relative;
`
const StyledBackground = styled.Image`
    width: 100%;
    height: 220px;
`
const Align = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`

export const Main = () => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const { data, setData } = useData();

    return (
        <View>
        <StyledBackground source={{uri: 'http://www.fachadadecasa.com.br/fachadas/fachada-casa-garagem-dois-carros.jpg'}} />
        <StyledView>
            <Input 
                title="Valor do Produto"
                value={formatValue(data?.productValue)}
                onChangeText={text => setData({...data, productValue: formatOnlyNumbers(text)})}
                money
            />
            <Input 
                title="Valor da Entrada"
                value={formatValue(data?.entryValue)}
                onChangeText={text => setData({...data, entryValue: formatOnlyNumbers(text)})}
                money
            />
            <Input 
                title="Número de Parcelas"
                value={data?.months || ''}
                onChangeText={text => setData({...data, months: formatOnlyNumbers(text)})}
            />
            <Align>
                <Pressable 
                    onPress={() => setData({...data, months: formatOnlyNumbers('12')})}
                    type="months"
                    value="12x"
                />
                <Pressable 
                    onPress={() => setData({...data, months: formatOnlyNumbers('24')})}
                    type="months"
                    value="24x"
                />
                <Pressable 
                    onPress={() => setData({...data, months: formatOnlyNumbers('48')})}
                    type="months"
                    value="48x"
                />
                <Pressable 
                    onPress={() => setData({...data, months: formatOnlyNumbers('60')})}
                    type="months"
                    value="60x"
                />
            </Align>
            <Input 
                title="Taxa de Juros Mensal"
                value={data?.fees || ''}
                onChangeText={text => setData({...data, fees: text})}
                percent
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <StyledModal 
                    onPress={
                        <Pressable 
                            onPress={() => setModalVisible(!modalVisible)}
                            type="trace"
                        />
                    } 
                />
            </Modal>
            {(data?.productValue && data?.entryValue && data?.months && data?.fees) ?
                <Pressable 
                    onPress={() => setModalVisible(true)}
                    type="button"
                />
            : 
                <Button
                    title="Calcular"
                />
            }
            <StatusBar style="auto" />
        </StyledView>
        </View>
    )
}
export default Main
