import React from 'react';
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


 const ActivityList = (props) => {
   return (
    <View style={{elevation:5,backgroundColor:'#fff',paddingVertical:20,paddingHorizontal:10,borderRadius:5,flexDirection:'row',alignItems:'center',marginVertical:10}}>
        <Icon name="clipboard-list" style={{fontSize:20,color:'#fff',marginRight:20,backgroundColor:'#3c96ff',width:35,height:35,paddingVertical:6,paddingHorizontal:10,borderRadius:30}}/>
        <View>
        <Text style={{fontSize:20,color:'#172d46',fontWeight:'900'}}>{props.text} Looking for references</Text>
        <Text style={{fontSize:14,color:'#172d46',fontWeight:'400'}}>1 Feb 2022</Text>
        </View>
        <Icon name="ellipsis-v" style={{fontSize:20,color:'#253a51',position:'absolute',right:10}}/>
    </View> 
   );
 };
 
 export default ActivityList;
