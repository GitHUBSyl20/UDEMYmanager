import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input =({label, onChangeText, placeHolder, secureTextEntry})=>{

    const { inputStyle, containerStyle, labelStyle } = styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style= {inputStyle}
                placeholder={placeHolder}
                onChangeText={onChangeText}
            />
        </View>
    )
};

const styles= {
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 23, 
        lineHeight: 20,
        flex:2, 
        
    },
    labelStyle:{
        color: "black", 
        fontSize: 23,
        //lineHeight beahaves differently On ios and Android !! 
        //applied to both top and bottom in ios (contratry to top)
        lineHeight: 50,
        flex:1,
        alignItems: 'center'
    }, 
    containerStyle:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        height: 60, 
        width: 100,
    },
};

export { Input };