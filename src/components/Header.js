import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Svg, {Circle,  } from 'react-native-svg';

export default function Header() {
  return (
    <View style={styles.header}>
      <Svg height="100%" width="100%" viewBox="-30 0 100 200" >
        <Circle cx="150" cy="30" r="60" stroke="rgba(255,255,255,0.1)" strokeWidth="37" fill="none" />
        <Circle cx="-270" cy="200" r="110" stroke="rgba(255,255,255,0.1)" strokeWidth="46" fill="none" />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#4A3780",
        width:"100%",
        height:"25%"
    }
})