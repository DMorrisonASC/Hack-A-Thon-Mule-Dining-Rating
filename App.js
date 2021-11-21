
/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, DrawerLayoutAndroidBase, StyleSheet, Text, View,TextInput } from 'react-native';
*/

import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {Text,View,Button} from 'react-native';

const foodInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <View style = {styles.background}>
      <Text h2 style={styles.text1}>Muhlenberg Dining Services</Text>
      <Text h1 style={styles.text}>Enter Magellans Food Item</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button b style = {styles.button1}title="Enter"></Button>
      </View>
    </SafeAreaView>
  );
};

import * as data from "./fooddata1.json";
let word=data.Foods;
let voteArray=new Array(word.length).fill(0);

console.log(voteArray);




const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    width: 400,
    alignSelf: "center",
  },
  text1:{
    fontSize: 60,
    textAlign: "center",
  },
  text:{
    fontSize:40,
    margin: 60,
    textAlign: "center",
  },
  background:{
    backgroundColor: "#A41E34"
  },
  button1:{
    height: 40,
    marginTop: 10,
    width: 20,
  }
});

export default foodInput;


















//import Search from './search';



// import { Searchbar } from 'react-native-paper';

// const MyComponent = () => {
//   const [seacrhQuery, setSearchQuery] = React.useState('');


//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default MyComponent;

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <Button id="Up" title="First"/>
// //       <StatusBar style="auto" />
      
// //     </View>
    
// //   );
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
