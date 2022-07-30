import React,{useState} from 'react';
import {Text,TouchableOpacity,StyleSheet,View,Alert} from 'react-native';
import TopBarHeading from '../components/TopBarHeading';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'todo.db' });


const ViewTask = ({ route, navigation }) => {

  const { taskName } = route.params;
  let [TaskData, setTaskData] = useState({});


    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM todo where task_name = ?',
        [taskName],
        (tx, results) => {
          var len = results.rows.length;
          //console.log('len', len);
          if (len > 0) {
            setTaskData(results.rows.item(0));
          } else {
            //alert('No user found');
          }
        }
      );
    });
  
    const Delete = (item) => {
      //console.log('delete query'+item);
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM  todo where task_name=?',
          [item],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              console.log('deleted');
              navigation.reset({index: 0,routes: [{ name: "Home" }],})
            } 
          }
        );
      });
     
    }
  


  return (
    <View style={styles.viewWrapper}>
      <View style={{backgroundColor:'#fff',padding:10,flex:0,flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.backBtn} onPress={() => navigation.reset({index: 0,routes: [{ name: "Home" }],})}>❮</Text>
           <TopBarHeading text='View Task'/>   
        </View>
       
      <View style={{padding:10,flex:1}}>
          <View style={styles.contentStyle}>
            <Text style={{textTransform:'capitalize',fontSize:16,color:'#000'}}> {taskName.slice(6)}</Text>
          </View>
          <View style={styles.contentStyle}>
            <Text style={{textTransform:'capitalize',fontSize:14,color:'#000'}}>
            {TaskData.task_desc}
            </Text>
          </View>

          <View style={styles.editBtnCon}>
            <TouchableOpacity
            onPress={() =>navigation.navigate('EditTask',{taskname:TaskData.task_name,taskdesc:TaskData.task_desc})}
              style={styles.editBtn}
            >
              <Text style={styles.editBtnTxt}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.delBtnCon}>
            <TouchableOpacity
              onPress={() => Alert.alert( "Warning",  "Are you sure you want to delete the "+taskName.slice(6)+"?",[{ text: "Yes",onPress: () =>Delete(taskName)},{ text: "No",}])}
              style={styles.delBtn}
            >
              <Text style={styles.delBtnTxt}>Delete</Text>
            </TouchableOpacity>
          </View>
      </View>
      


    </View>
  );
};

export default ViewTask;


 const styles = StyleSheet.create({
  backBtn:{
    fontSize:15,
    marginRight:20,
    color:'#17a2b8',
    paddingVertical:10,
    paddingHorizontal:10,
    textAlign:'center'
  },
    viewWrapper: {
      flex:1,
      backgroundColor:'#F1F4F5'
    },
    contentStyle:{
      marginBottom:10,
      backgroundColor:'#fff',
      padding:10,
      shadowColor: "#000",
      hadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius:1,
        elevation: 1, 
    },
    editBtnCon:{
      position:'absolute',
      right:5,
      bottom:5,
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
    },
    delBtnCon:{
      position:'absolute',
      left:5,
      bottom:5,
      marginTop:10
    },
    delBtn: {
      paddingVertical:7,
      paddingHorizontal:17,
      shadowColor: "#000",
      backgroundColor:'red',
    },
    delBtnTxt:{
      color:'#fff',
      fontSize:15,
      textAlign:'center'
    }



  
  });
 