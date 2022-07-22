import React, {useState,useEffect } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView ,Alert,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './components/Task';


import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase({ name: 'todoDB.db' });

function HomeScreen({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  // Start Create table
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='todo'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS todo', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS todo(todo_id INTEGER PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(20))',
              []
            );
          }
        }
      );
    });
  }, []);
  // End Create Table

 // Start Get All data
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM todo',
        [],
        (tx, results) => {
          var temp_taskName = [];
          for (let i = 0; i < results.rows.length; ++i)
          // temp_taskName.push(results.rows.item(i)['task_name']);
          temp_taskName.push(results.rows.item(i)['task_name']);
          setTaskItems(temp_taskName);
        }
      );
    });
  }, []);

  // End Get All data

  const handleAddTask = () => {
    
    let r = (Math.floor(100000 + Math.random() * 900000));

    if(!task){
      Alert.alert('Field Is Empty','Please fill task name');
      return;
    }
    Keyboard.dismiss();
    setTaskItems([...taskItems, r+task])
    setTask(null);
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO todo (task_name ) VALUES (?)',
        [r+task],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('scuccess add');
            console.log("random", r);
          }
        }
      );
    });

   
  }

  const gotoView = (item) => {
    navigation.navigate('View',{taskName:item})
  }
  const gotoEditDelete = (index,item) => {
    Alert.alert(
      "Edit | Delete",
      "Please Choose Edit or Delete",
      [
        {
          text: "Cancel",
        },
        { text: "Edit",
         onPress: () =>  navigation.navigate('Update',{taskName:item})
        },
        { text: "Delete",
         onPress: () => Alert.alert("Danger","Are you sure? You want to delete the "+(item).slice(6),[{text: "No"},{text:"yes",onPress: () => deleteThis(index,item)}])
        }
      ]
    );

  }
  const deleteThis = (index,item) => {

    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  todo where task_name=?',
        [item],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log('deleted');
          } 
        }
      );
    });


    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskCon}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
          {/* Today's Tasks */}
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}  onPress={() => gotoView(item)}  onLongPress={() => gotoEditDelete(index,item)} >
                          <Task text={item} /> 
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
      </ScrollView>
      </View>{/**End Task List Container */}

      <View style={styles.creatNewCon}>
      <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Task Name'} value={task} onChangeText={text => setTask(text)}  placeholderTextColor="#cfcecc"  />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>{/**End Create New task Container */}

      
      </View>

  );
};

function UpdateScreen({ route, navigation }) {
  const { taskName } = route.params;
  const [state, setState] = React.useState({
    ogTaskName: taskName,
    trimTaskName: taskName.slice(6),
    trimDigit: taskName.substring(0, 6)
  });

  const updateState = (key, value) => {
    setState(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };

  


  


  const updateData = () => {
    //alert(state.trimTaskName);
    // navigation.navigate('Home');
    console.log(state.ogTaskName);
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE todo set task_name=? where task_name=?',
        [state.trimDigit+state.trimTaskName, state.ogTaskName],
        (tx, results) => {
          //console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          } 
        }
      );
    });
    
  }
  return (
    <View style={styles.containerWrapper}>
          <View style={styles.items}>
            <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput style={styles.updateInput} placeholder={'Task Name'} value={state.trimTaskName} onChangeText={text => updateState('trimTaskName',text)}  placeholderTextColor="#cfcecc"  />
            <TouchableOpacity onPress={() => updateData()}>
              <View style={styles.UpdateWrapper}>
                <Text style={styles.updateText}>Update</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
    </View>
  );
}
function ViewScreen({ route, navigation }) {
  const { taskName } = route.params;
  return (
    <View style={styles.containerWrapper}>
          <View style={styles.items}>
            <Task text={taskName} /> 
        </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerLeft: (props) => null,headerTitle:"Todo App" }}/>
      <Stack.Screen name="Update" component={UpdateScreen} options={{headerLeft: (props) => null }}/>
      <Stack.Screen name="View" component={ViewScreen}  />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  taskCon:{
    flex:1,
    padding:2,
    backgroundColor: "#cfd4cf",
  },
  creatNewCon:{
    // flex: 0,
  },
  tasksWrapper: {
    paddingTop: 5,
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  containerWrapper: {
    flex:1,
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor:"#cfd4cf"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '60%',
    color:"#000",
  },
  updateInput: {
    marginTop:10,
    marginBottom:10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '100%',
    color:"#000",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  UpdateWrapper:{
    width: "100%",
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    
    
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  itemText: {
    maxWidth: '100%',
  },
  addText:{
    color:"#000",
  },
  updateText:{
    color:"#000",
  }
});