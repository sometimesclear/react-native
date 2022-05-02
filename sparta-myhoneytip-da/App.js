//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image, LayoutAnimation, TouchableOpacity } from 'react-native';


export default function App() {
  return (    
    <ScrollView style={styles.container}>       
        <Text style={styles.title}>나만의 꿀팁</Text> 
          <Image
            style={styles.mainImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
            }}
            resizeMode={"cover"}
           />                        
        
        <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}> 
          <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>운동</Text></TouchableOpacity>
          <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
          <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>취업</Text></TouchableOpacity>
          <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>미용</Text></TouchableOpacity>          
        </ScrollView>       
        <View style={styles.subContainer}> 
          <View style={styles.innerContainer}>  
            <Image style={styles.innerImg}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'
              }}
              resizeMode={"cover"}
            /> 
            <View style={styles.innerText}>
              <Text style={styles.innerTextTitle}>
              먹다 남은 피자를 촉촉하게!
              </Text>
              <Text numberOfLines={3} style={styles.textContent}>
              먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
              </Text>
              <Text style={styles.textDate}>2020.09.09</Text>
            </View>
          </View>
        </View>        

      </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
    width:'90%',
  },

  title: {    
    fontSize: '16px',
    fontWeight: '600',
    padding: 20,
  },
  
  mainImage: {    
    width:'90%',   
    height:200,    
    borderRadius:10,
    //marginTop:10,    
    alignSelf:"center"
  }, 
    
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },

  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },

  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },

  middleButtonText: {
    textAlign: 'center',
    fontWeight: '400',
    color : '#fff',
  },

  subContainer: {
    height:60,           
    padding:10,      
  },

  innerContainer: {
    flexDirection: 'row',
    padding: 10,    
  },

  innerText: {
    flex: 2,
    marginLeft: 10,    
  },

  innerImg: {
    flex: 1,
    borderRadius: 10,    
  },   

  innerTextTitle: {
    flexDirection: 'column',
    fontSize: '16px',
    fontWeight: '600',
  },  

  textDate: {
    fontSize:10,
    color:"#A6A6A6",
  },

});
