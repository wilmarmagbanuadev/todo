import React from 'react';
import {Text,View,ImageBackground} from 'react-native';
import TopBarHeading from '../../../../components/AppTopHeading';
import MainScreenBottomTab from '../../../../components/AppMainScreenBottomTab';
import styles from './styles';
const image = { uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1659615503~exp=1659616103~hmac=51e2fcaea48f784760bb926a6dc450f9fbc36570be653de4e954b5516f7de1d2" };
 const AddTask = () => {
   return (
    <View style={{flex:1}}>
      <TopBarHeading text="New Task" back="Todo"/>
      <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>

      </ImageBackground>
      <MainScreenBottomTab/>
    </View>
   );
 };
 
 export default AddTask;