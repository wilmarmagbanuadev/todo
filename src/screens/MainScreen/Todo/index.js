import React from 'react';
import {Text,View,ImageBackground,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import TopBarHeading from '../../../components/AppTopHeading';
import MainScreenBottomTab from '../../../components/AppMainScreenBottomTab/index';
import ActivityList from '../../../components/AppActivityList';
const image = { uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1659615503~exp=1659616103~hmac=51e2fcaea48f784760bb926a6dc450f9fbc36570be653de4e954b5516f7de1d2" };
 const Todo = ({navigation}) => {
   return (
        <View style={{flex:1}}>
          <TopBarHeading text="List of Activities" back="MainScreen"/>
          <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
          <ScrollView style={{paddingHorizontal:15,marginBottom:60}}>
            <ActivityList text="1"/>
            <ActivityList text="2"/>
            <ActivityList text="3"/>
            <ActivityList text="4"/>
            <ActivityList text="5"/>
            <ActivityList text="6"/>
            <ActivityList text="7"/>
            <ActivityList text="8"/>
            <ActivityList text="9"/>
            <ActivityList text="10"/>
            <ActivityList text="11"/>
          </ScrollView>
           
          </ImageBackground>
            <TouchableOpacity  style={{position:'absolute',bottom:60,right:20,zIndex:1}}  onPress={() => { navigation.navigate('AddTask') }} >
              <Icon name="plus-circle" style={{fontSize:60,color:'#0076ff',backgroundColor:'#fff',elevation:5,borderRadius:30}} />
            </TouchableOpacity>   
          <MainScreenBottomTab active='todo'/>
        </View>  
   );
 };
 
 export default Todo;