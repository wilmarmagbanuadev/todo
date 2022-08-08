import React from 'react';
import {Text,View,ImageBackground,Image,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import MainScreenBottomTab from '../../../components/AppMainScreenBottomTab';
const image = { uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1659615503~exp=1659616103~hmac=51e2fcaea48f784760bb926a6dc450f9fbc36570be653de4e954b5516f7de1d2" };
const Home = ({navigation}) => {
   return (
        <View style={styles.container}>
           <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
            <View style={styles.profileSec}>
              <View style={{flex:1}}>
                <Text style={{fontSize:25,color:'#011833',fontWeight:'700'}}>Morning, <Text style={{color:'#2389fe'}}>Wilmar</Text> <Icon name="hand-sparkles" size={25} color="#ffd561" /> </Text>
                <Text style={{alignItems:'center',flex:1,color:'grey',fontSize:12}}><Icon name="bullhorn" size={14} color="red" /> <Text style={{color:'red'}}>3 task</Text> are waiting for you today</Text>
              </View>
              <View>
                <Image source={require('../../../images/profile_placeholder.jpg')} style={{width:50,height:50}} />
              </View>
            </View>
            <View style={styles.actSec}>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                  <View>
                    <Text style={styles.secHeadingL}>Activities</Text>
                  </View>
                  <View>
                    <Text style={styles.secHeadingR}>Add Activity</Text>
                  </View>
                </View>
              
                <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:10}}>
                  <View style={{backgroundColor:'#0076ff',width:80,height:80,borderRadius:10,justifyContent:'center',alignItems:'center'}}><Text>Date</Text></View>
                  <View style={{backgroundColor:'grey',width:80,height:80,borderRadius:10,justifyContent:'center',alignItems:'center'}}><Text>Date</Text></View>
                  <View style={{backgroundColor:'grey',width:80,height:80,borderRadius:10,justifyContent:'center',alignItems:'center'}}><Text>Date</Text></View>
                </View>

            </View>
            <View style={styles.catSec}>
              <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                  <View>
                    <Text style={styles.secHeadingL}>Category</Text>
                  </View>
                  <View>
                    <Text style={styles.secHeadingR}>See All</Text>
                  </View>
              </View>
              <View style={{justifyContent:'space-around',flexDirection:'row',marginVertical:10}}>

                <View style={styles.catRow}>
                  <View style={styles.catRowHeadingIcon}>
                    <View>
                      <Text style={styles.catRowHeading}>Personal Todo</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                      <Icon name="user" style={styles.catRowIcon}/>
                    </View>
                  </View>
                  <View style={{marginVertical:10}}>
                    <Text style={{color:'red',fontSize:10}}>
                      <Icon name="bullhorn" size={14} /> 12 Tasks remaining
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.catRowGoTask}>
                      Go to Task  <Icon name="arrow-right"/>
                    </Text>
                  </View>
                </View>

                <View style={styles.catRow}>
                  <View style={styles.catRowHeadingIcon}>
                    <View>
                      <Text style={styles.catRowHeading}>Work Todo</Text>
                    </View>
                    <View style={{marginLeft:10}}>
                      <Icon name="users" style={styles.catRowIcon}/>
                    </View>
                  </View>
                  <View style={{marginVertical:10}}>
                    <Text style={{color:'red',fontSize:10}}>
                      <Icon name="bullhorn" size={14} /> 20 Tasks remaining
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.catRowGoTask}>
                      Go to Task  <Icon name="arrow-right"/>
                    </Text>
                  </View>
                </View>

              </View>
            </View>
            <View style={styles.onGiongSec}>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                  <View>
                    <Text style={styles.secHeadingL}>Ongoing Task</Text>
                  </View>
                  <View>
                    <Text style={styles.secHeadingR}>See All</Text>
                  </View>
                </View>
                <ScrollView style={{marginTop:20}}>
                  <LinearGradient start={{ x: 0, y: 0 }}end={{x: 1, y: 1 }}colors={['#ffff', '#ffcdd6']} style={styles.onTaskCon} >
                    <LinearGradient colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={styles.onTaskConLeftBar}>
                      <Text></Text>
                    </LinearGradient>
                    <View>
                      <Icon name='ellipsis-v' style={styles.onTaskElips}/>
                      <Text style={styles.onTaskHeading}>Dribble Shot</Text>
                      <Text style={styles.onTaskDesc}>For Sans Brothers</Text>
                      <Text style={styles.onTaskDue}>Due Date</Text>
                      <Text style={styles.onTaskDate}><Icon name="calendar-alt"/> Wed, 6 Feb 2022</Text>
                    </View>
                  </LinearGradient> 

                  <LinearGradient start={{ x: 0, y: 0 }}end={{x: 1, y: 1 }}colors={['#ffff', '#ffcdd6']} style={styles.onTaskCon} >
                    <LinearGradient colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={styles.onTaskConLeftBar}>
                      <Text></Text>
                    </LinearGradient>
                    <View>
                      <Icon name='ellipsis-v' style={styles.onTaskElips}/>
                      <Text style={styles.onTaskHeading}>Dribble Shot</Text>
                      <Text style={styles.onTaskDesc}>For Sans Brothers</Text>
                      <Text style={styles.onTaskDue}>Due Date</Text>
                      <Text style={styles.onTaskDate}><Icon name="calendar-alt"/> Wed, 6 Feb 2022</Text>
                    </View>
                  </LinearGradient> 

                  <LinearGradient start={{ x: 0, y: 0 }}end={{x: 1, y: 1 }}colors={['#ffff', '#ffcdd6']} style={styles.onTaskCon} >
                    <LinearGradient colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={styles.onTaskConLeftBar}>
                      <Text></Text>
                    </LinearGradient>
                    <View>
                      <Icon name='ellipsis-v' style={styles.onTaskElips}/>
                      <Text style={styles.onTaskHeading}>Dribble Shot</Text>
                      <Text style={styles.onTaskDesc}>For Sans Brothers</Text>
                      <Text style={styles.onTaskDue}>Due Date</Text>
                      <Text style={styles.onTaskDate}><Icon name="calendar-alt"/> Wed, 6 Feb 2022</Text>
                    </View>
                  </LinearGradient> 
              </ScrollView>
                    
               
            </View>
           </ImageBackground>
           
           <MainScreenBottomTab active='home'/>
        </View>
        
   );
 };
 
 export default Home;