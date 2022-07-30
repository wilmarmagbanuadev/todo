import React, {useState ,useEffect} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import Lists from '../components/Lists';
import TopBarHeading from '../components/TopBarHeading';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'todo.db' });





const Home = ({ navigation }) => {
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
            'CREATE TABLE IF NOT EXISTS todo(todo_id INTEGER PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(20), task_desc VARCHAR(20))',
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
        temp_taskName.push(results.rows.item(i)['task_name']);
        setTaskItems(temp_taskName);
      }
    );
  });
}, []);

// End Get All data



  return (
    <View style={{flex:1}}>
       <View style={{backgroundColor:'#fff',padding:10,flex:0,flexDirection:'row',alignItems:'center'}}>
            <TopBarHeading text="Todo Application"/>
        </View>
        <View style={styles.homeWrapper}>
              <ScrollView contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom:30
                }}
                keyboardShouldPersistTaps='handled'>
                  <View>
                    {
                      taskItems.map((item, index) => {
                        return (
                          // <TouchableOpacity key={index} onPress={() =>navigation.reset({index: 0,routes: [{ name: "Home" }],})} >
                          <TouchableOpacity key={index} onPress={() =>navigation.navigate('ViewTask',{taskName:item})} >
                            <Lists text={item} /> 
                          </TouchableOpacity>
                        
                          
                        )
                      })
                    }

                  </View>
              </ScrollView>
              <View style={styles.addBtnCon}>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => navigation.navigate('AddTask')}
                >
                  <Text style={styles.addBtnTxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
    </View>
    
  );
};

export default Home;





 const styles = StyleSheet.create({
  homeWrapper:{
    flex:1,
    padding:10,
  },
  addBtnCon:{
    position:'absolute',
    bottom:10,
    right:10
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingVertical:7,
    paddingHorizontal:17,
    shadowColor: "#000",
    backgroundColor:'#28a745',
    shadowOffset:{
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius:2,
    elevation: 1, 
  },
  addBtnTxt:{
    color:'#fff',
    fontSize:25
  }

});
