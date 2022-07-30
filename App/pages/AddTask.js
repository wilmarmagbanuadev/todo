import React,{useState} from 'react';
import {Text,TouchableOpacity,View,StyleSheet,Alert} from 'react-native';
import MytextInput from '../components/MyTextInput';
import TopBarHeading from '../components/TopBarHeading';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'todo.db' });

const AddTask = ({ navigation }) => {
  const [taskName, setTaskName] = useState();
  const [taskDesc, setTaskDesc] = useState();
  const addNewTask = () => {
    let r = (Math.floor(100000 + Math.random() * 900000));
    //navigation.navigate('Home');
    
    if(!taskName){
      Alert.alert('Field Is Empty','Please fill task name');
      return;
    }else if(!taskDesc){
      Alert.alert('Field Is Empty','Please fill task description');
      return;
    }
    setTaskName(null);
    setTaskDesc(null);
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO todo (task_name,task_desc) VALUES (?,?)',
        [r+taskName,taskDesc],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('scuccess add');
            console.log("random", r);
          }
        }
      );
    });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
  })


    }
  return (
    <View style={{flex:1}}>
     <View style={{backgroundColor:'#fff',padding:10,flex:0,flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.backBtn} onPress={() => navigation.navigate('Home')}>❮</Text>
        <TopBarHeading text="Add Task"/>
      </View>
      <View style={styles.addTaskWrapper}>
            <View>
              <MytextInput placeholder='Task Name' value={taskName} onChangeText={text => setTaskName(text)}/>
              <MytextInput placeholder='Task Description' maxLength={225}numberOfLines={5}multiline={true}style={{ textAlignVertical: 'top', padding: 0 }} value={taskDesc} onChangeText={text => setTaskDesc(text)}/>
            </View>
            <View style={styles.saveBtnCon}>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() =>addNewTask()}

              >
                <Text style={styles.saveBtnTxt}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
    
  );
};

export default AddTask;



 const styles = StyleSheet.create({
  backBtn:{
    fontSize:15,
    marginRight:20,
    color:'#17a2b8',
    paddingVertical:10,
    paddingHorizontal:10,
    textAlign:'center'
  },
  addTaskWrapper: {
    flex:1,
    padding:10,
    backgroundColor:'#F1F4F5'
  },
  saveBtnCon:{
    marginTop:10
  },
  saveBtn: {
    paddingVertical:7,
    paddingHorizontal:17,
    shadowColor: "#000",
    backgroundColor:'#28a745',
  },
  saveBtnTxt:{
    color:'#fff',
    fontSize:15,
    textAlign:'center'
  }

});