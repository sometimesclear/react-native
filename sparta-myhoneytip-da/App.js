//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image, LayoutAnimation } from 'react-native';
import favicon from "./assets/favicon.png"

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>        
        <Text style={styles.title}>나만의 꿀팁</Text>        
        <View style={styles.subContainerOne}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
            }}
            resizeMode={"cover"}
           />            
        </View>                
        <View style={styles.subContainerTwo}>
          <Text style={styles.tabText}>운동</Text>
          <Text style={styles.tabText}>재테크</Text>
          <Text style={styles.tabText}>취업</Text>
          <Text style={styles.tabText}>미용</Text>
        </View>           
        <View style={styles.subContainerThree}>        
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'
            }}
            resizeMode={"cover"}
            style={styles.imageStyleSmall}
          /> 
          <View style={styles.innerContainer}>  
            <Text style={[styles.textTitle, styles.title]}>
            먹다 남은 피자를 촉촉하게!
            </Text>
            <Text numberOfLines={3} style={styles.textContent}>
            먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
            </Text>
          </View>
        </View>   
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',        
    flexDirection: 'comlumn',
    backgroundColor: '#fff',   
    maxWidth: '450px',
    padding:10,
  },
  subContainerOne: {  
    display: 'flex',    
    flexDirection: 'row',
    height:'100%',           
    textAlign:"left",    
  },
  subContainerTwo: {
    display: 'flex',    
    flexDirection: 'row',    
    height:'60px',
    textAlign:"center",
  },  

  subContainerThree: {  
    display: 'flex',    
    flexDirection: 'row',
    height:'100%',           
    padding:10,      
  },

  innerContainer: {
    width: '70%',
    marginLeft: '5%',
  },

  imageStyle: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 10,
  },

  imageStyleSmall: {
    flexDirection: 'row',
    width:"25%",
    height:"50%",
    borderRadius: 10,
    //borderWidth: 2,
  },

  tabText: {
    backgroundColor:"#4caf50",
    color:"#ffffff",
    padding:10, 
    margin:10,
    height:'40px',
    width:'25%',
    borderRadius: 10,    
  },
  
  textTitle: {
    flexDirection: 'column',
  },

  subText2: {
    backgroundColor:"#ff7f50",
    padding:10,  
  },

  title: {    
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: 10,
  },

  buttonWrap: {
    flex:1,     
    flexDirection: 'row',   
  },

  buttonStyle: {    
    width: '100%',
    margin:10,    
    borderColor:'#06bcee',
    borderWidth:1,
  },

});
