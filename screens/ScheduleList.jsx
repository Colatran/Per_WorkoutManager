import { StyleSheet, View, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db, schedules } from '../firebase.config';

import { color_background_dark, styles_common, styles_text } from "../styles/styles";
import Button_Icon from "../components/Button_Icon";


const ref_schedules = collection(db, schedules);

export default function ScheduleList({ navigation }) {
  const [docs, setDocs] = useState([]);
  const [files, setFiles] = useState([])


  useEffect(() => {
    return onSnapshot(ref_schedules, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocs(data);
    });
  }, []);








  
  const handleOnPressView = (item) => {
    navigation.navigate('Schedule', {item: item});
  }
  const handleOnPressEdit = (item) => {

  }
  const handleOnPressMoveUp = (item) => {

  }
  const handleOnPressMoveDown = (item) => {

  }



  return (
    <View style={styles_common.container}>
      
      <View style={{flex: 1}}>
        <FlatList
          data={docs}
          renderItem={({item}) => { 
            return(
              <View style={[styles_common.container_front, {paddingHorizontal: 8, paddingVertical: 4, marginVertical: 10, flexDirection: "row", alignItems: "center"}]}>
                <Button_Icon style={[styles.button, {marginRight: 8}]} icon="eye" onPress={() => handleOnPressView(item)}/>
                <Text style={styles_text.common}>{item.title}</Text>
                <View style={{flex: 1, justifyContent: "flex-end", flexDirection: "row"}}>
                  <Button_Icon style={styles.button} icon="menu-up" onPress={() => handleOnPressMoveUp(item)}/>
                  <Button_Icon style={styles.button} icon="menu-down" onPress={() => handleOnPressMoveDown(item)}/>
                  <Button_Icon style={styles.button} icon="pencil" onPress={() => handleOnPressEdit(item)}/>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  button: {
    marginHorizontal: 2,
    backgroundColor: color_background_dark,
  }
});