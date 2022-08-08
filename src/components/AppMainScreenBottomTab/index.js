import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
 const MainScreenBottomTab = (props) => {
    const navigation = useNavigation();
   return (
        <View style={styles.container}>
            <View style={styles.iconCon}>
                <TouchableOpacity onPress={() =>navigation.navigate('MainScreen')}>
                    <Icon name='home' style={props.active=='home'?styles.iconActive:styles.iconNormal}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('Todo')}>
                    <Icon name='list-alt' style={props.active=='todo'?styles.iconActive:styles.iconNormal}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='cogs' style={props.active=='cogs'?styles.iconActive:styles.iconNormal}/>
                </TouchableOpacity>
                
            </View>
           
        </View>
        
   );
 };
 
 export default MainScreenBottomTab;