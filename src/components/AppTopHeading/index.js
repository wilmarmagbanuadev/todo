import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
 const TopBarHeading = (props) => {
  const navigation = useNavigation();

   return (
    
    <View  style={props.text==null ? null : styles.headCon}>
      {props.back!=null? 
        <TouchableOpacity  style={{marginHorizontal:10}} onPress={() =>navigation.navigate(props.back)}>
          <Icon name="arrow-left" style={{fontSize:20,color:'#0076ff'}}/>
        </TouchableOpacity>
        :null
      }
      <Text style={styles.heading}>{props.text}</Text>
   </View>        
   );
 };

 
 export default TopBarHeading;

 