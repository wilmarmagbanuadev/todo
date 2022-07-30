import React,{useState} from 'react';
import {Text,TouchableOpacity,View,StyleSheet,Alert} from 'react-native';
import MytextInput from '../components/MyTextInput';
import TopBarHeading from '../components/TopBarHeading';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'todo.db' });

const EditTask = ({ route,navigation }) => {

const { taskname } = route.params;
const { taskdesc } = route.params;
const [state, setState] = React.useState({
    ogTaskName: taskname,
    trimTaskName: taskname.slice(6),
    trimDigit: taskname.substring(0, 6),
    TaskDesc:taskdesc,

  });
  const updateState = (key, value) => {
    setState(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };

  const UpdateTask = () => {
    if(!state.trimTaskName){
      Alert.alert('Field Is Empty','Please fill task name');
      return;
    }else if(!state.TaskDesc){
      Alert.alert('Field Is Empty','Please fill task description');
      return;
    }
        db.transaction((tx) => {
            tx.executeSql(
            'UPDATE todo set task_name=?,task_desc=? where task_name=?',
            [state.trimDigit+state.trimTaskName, state.TaskDesc,state.ogTaskName],
            (tx, results) => {
                //console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                navigation.navigate('ViewTask',{taskName:state.trimDigit+state.trimTaskName})
                } 
            }
            );
        });
    }
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#fff',padding:10,flex:0,flexDirection:'row',alignItems:'center'}}>
      <Text style={styles.backBtn} onPress={() =>  navigation.goBack() }>❮</Text>
        <TopBarHeading text="Update task Information"/>
      </View>
      <View style={styles.editTaskWrapper}>
        <View>
          <MytextInput  placeholder={'Task Name'}value={state.trimTaskName} onChangeText={text => updateState('trimTaskName',text)}/>
          <MytextInput placeholder='Task Description' maxLength={225}numberOfLines={5}multiline={true}style={{ textAlignVertical: 'top', padding: 0 }} value={state.TaskDesc} onChangeText={text => updateState('TaskDesc',text)}/>
        </View>
        <View style={styles.editBtnCon}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() =>UpdateTask()}

          >
            <Text style={styles.editBtnTxt}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditTask;



 const styles = StyleSheet.create({
  backBtn:{
    fontSize:15,
    marginRight:20,
    color:'#17a2b8',
    paddingVertical:10,
    paddingHorizontal:10,
    textAlign:'center'
  },
  editTaskWrapper: {
    flex:1,
    padding:10,
    backgroundColor:'#F1F4F5'
  },
  editBtnCon:{
    marginTop:10
  },
  editBtn: {
    paddingVertical:7,
    paddingHorizontal:17,
    shadowColor: "#000",
    backgroundColor:'#28a745',
  },
  editBtnTxt:{
    color:'#fff',
    fontSize:15,
    textAlign:'center'
  }

});