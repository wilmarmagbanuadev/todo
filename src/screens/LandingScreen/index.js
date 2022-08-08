import React from 'react';
import {Text,View,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const image = { uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1659615503~exp=1659616103~hmac=51e2fcaea48f784760bb926a6dc450f9fbc36570be653de4e954b5516f7de1d2" };

 const Landing = ({navigation}) => {
   return (
        <View style={styles.container}>
          <View style={{position:'absolute',zIndex:1,width:'100%',paddingHorizontal:10,marginTop:10}}>
              <View  style={styles.secGotoLogIn}>
                <View>
                    <Image source={require('../../images/ubra_logo.png')}  style={styles.appLogo}/>
                  </View>
                  <View style={{alignContent:'center'}}>
                    <Text style={{fontSize:20,textTransform:'capitalize',color:'#2389fe',fontWeight:'bold'}}><Icon name="sign-in" size={20} color="#2389fe" /> login</Text>
                  </View>
              </View>
            </View>
          <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
              <View style={{paddingHorizontal:10,marginTop:30}}>
                  <Text style={styles.heading}>Manage your daily activities with <Text style={{color:'#000',textTransform:'uppercase'}}>ubra</Text></Text>
              </View>
              <View style={{alignSelf:'center',marginVertical:25}}>
                <Image source={require('../../images/4894122.png')} style={styles.imgPlaceholder}/>
              </View>  
              <View>
                <Text style={{fontSize:18,color:'#000',lineHeight:20}}>As the name said Ubra, we will give you the easiest way to manage you day to day activities</Text>
              </View>
              <View>
              {/* navigation.reset({index: 0,routes: [{ name: 'Home' }],}) */}
              {/* onPress={() =>navigation.navigate('MainScreen')} */}
              <TouchableOpacity style={{backgroundColor:'#0076ff',paddingVertical:10,paddingHorizontal:20,marginVertical:30,borderRadius:40}}  onPress={() =>navigation.reset({index: 0,routes: [{ name: 'MainScreen' }],})} >
                  <Text style={{textAlign:'center',color:'#fff',fontSize:18}}>Get Started</Text>
                </TouchableOpacity>
              </View>
          </ImageBackground>   
        </View>
   );
 };
 
 export default Landing;