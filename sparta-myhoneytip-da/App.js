//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image, LayoutAnimation, TouchableOpacity } from 'react-native';
import data from './data.json';


export default function App() {
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = '흐림'

  return (    
    <ScrollView style={styles.container}>       
        <Text style={styles.title}>나만의 꿀팁</Text> 
        <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition}</Text>
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
            {
              tip.map((content, i)=>{
                return i % 2 == 0 ? (<View style={[styles.cardEven, styles.innerContainer]} key={i}>
                    <Image style={styles.innerImg} source={{uri:content.image}}/>
                    <View style={styles.innerText}>
                      <Text style={styles.innerTextTitle} numberOfLines={1}>{content.title}</Text>
                      <Text numberOfLines={3} style={styles.textContent}>{content.desc}</Text>
                      <Text style={styles.textDate}>{content.date}</Text>
                    </View>
                  </View>) : (<View style={[styles.cardOdd, styles.innerContainer]} key={i}>
                    <Image style={styles.innerImg} source={{uri:content.image}}/>
                    <View style={styles.innerText}>
                      <Text style={styles.innerTextTitle} numberOfLines={1}>{content.title}</Text>
                      <Text numberOfLines={3} style={styles.textContent}>{content.desc}</Text>
                      <Text style={styles.textDate}>{content.date}</Text>
                    </View>
                  </View>)
              })
            }         
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
  
  weather: {
    alignSelf: "flex-end",
    paddingRgith:20,
    marginBottom:10,
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

  cardEven: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fffed7",
    borderRadius: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },

  cardOdd: {
    flex: 1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth: 0.5,
    borderBottomColor:"#eee",
    paddingBottom:10,
  },

});
