import React, { Component } from 'react';
//tags to be imported so it can be used. We use destructuring import

import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
        return(
            //props styles are passed directly and defined below
            //container is the flex element and inside it the children will be "flexed" IF we put the porperty display:flex
            <View style={styles.container}>
                <Text style={styles.welcome}>{props.headerText}</Text>  
            </View>
              )
        }
        
const styles = StyleSheet.create({
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FAEBD7',
              height: 60,
              paddingTop:15,
              shadowColor: '#000',
              shadowOffset : {width: 0, height: 2},
              shadowOpacity: 0.2,
              elevation: 2,
        /*       position: relative, */
            },
            welcome: {
              fontSize: 30,
              textAlign: 'center',
              margin: 10,
            },
          });

export { Header } 