import React from 'react';
import {Text,StyleSheet,View} from 'react-native';


 const TopBarHeading = (props) => {
   return (
    <View>
        <Text style={styles.heading}>{props.text}</Text>
    </View>
    
        
   );
 };
 
 export default TopBarHeading;
 const styles = StyleSheet.create({
    heading:{
        color:'#17a2b8',
        fontSize:20,
        textTransform:'capitalize',
        fontWeight:'bold'
    }

 });
 