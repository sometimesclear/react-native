//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image, LayoutAnimation } from 'react-native';
import favicon from "./assets/favicon.png"

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subContainerOne}>
          <Image
            source={favicon}
            resizeMode={"center"}
            style={styles.imageStyle}
          />
        </View>       
        <View style={styles.subContainerOne}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
            }}
            resizeMode={"cover"}
           />            
        </View>        
        <Button 
          style={styles.buttonStyle}
          title="파랑 버튼"
          color='#6ab0f3'
          onPress={function(){
            Alert.alert("팝업 알람!")
          }}
        />
        <Button 
          style={styles.buttonStyle}
          title="초록 버튼"
          color='#92d192'
          onPress={()=>{ Alert.alert("팝업 알람 화살표 함수로!")}}
        />

        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>                     
        
        <View style={styles.subContainerTwo}>
          <Text style={styles.subText}>서브 텍스트, 서브 텍스트</Text>
          <Text style={styles.subText2}>서브 텍스트2, 서브 텍스트2</Text>
          <View style={styles.subContainerTwo}> 
            <Image
              source={favicon}
              resizeMode={"center"}
              style={styles.imageStyle}
            />   
          </View>
        </View>   
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
  subContainerOne: {
    height:200,
    borderColor:'#000',
    borderWidth:1,    
    margin:10,
    padding:10,
    textAlign:"center",
  },
  subContainerTwo: {
    flex:1,
    flexDirection: "row",      
    //backgroundColor:"blue",
  },

  buttonStyle: {
    margin:10,
    width:200,
  },

  imageStyle: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
  },

  subText: {
    backgroundColor:"#4caf50",
    color:"#ffffff",
    padding:10,  
  },
  
  subText2: {
    backgroundColor:"#ff7f50",
    padding:10,  
  },
});
