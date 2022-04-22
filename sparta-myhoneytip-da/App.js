import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerOne}>
          <Text style={styles.mainText}>텍스트는 Text 태그 안에 넣어요.</Text>
        </View>
        <View style={styles.subContainerTwo}></View>      
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
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
    padding:20,
    textAlign:"center",
  },
  subContainerTwo: {
    flex:1,
    backgroundColor:"blue",
  },
  
});
