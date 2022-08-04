import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


 const Lists = (props) => {

   return (
        <View style={styles.listWrapper}>
            <Text style={styles.listTxt}>{props.text.slice(6)}</Text>
        </View>
        
   );
 };
 export default Lists;

 const styles = StyleSheet.create({
  listWrapper: {
        marginVertical:5,
        backgroundColor:'#17a2b8',
        //backgroundColor:'#fff',
        shadowColor: "#000",
        padding:10,
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius:1,
        elevation: 1, 
        borderRadius:3,
    },
    listTxt:{
      color:'#fff',
      textAlign:'left',
      textTransform:'capitalize'
    }

  });

