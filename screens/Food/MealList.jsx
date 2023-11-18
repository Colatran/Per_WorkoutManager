import { View, Text } from "react-native";
import { useContext } from "react";

import { _icon_check, _icon_edit, styles_common, styles_text, styles_lists } from "../../styles/styles";

import Button_Icon from "../../components/Button_Icon";
import { UserContext } from "../../utils/UserContext";
import ScreenList from "../../components/screen/ScreenList";
import Button_Footer_Add from "../../components/Button_Footer_Add";



export default function MealList({ navigation }) {
  const { mealDocs } = useContext(UserContext);

  const handleOnPressAdd = () => {
    navigation.navigate("MealEdit", {});
  }

  return (
    <View style={styles_common.container}>
      <ScreenList data={mealDocs}>
        <ListItem navigation={navigation}/>
      </ScreenList>
      <Button_Footer_Add onPressAdd={handleOnPressAdd}/>
    </View>
  );
}



function ListItem(props) {
  const { item } = props;
  const navigation = props.navigation;

  const handleOnPressCheck = (item) => {
  }
  const handleEditOnPress = (item) => {
    navigation.navigate("MealEdit", { meal: item });
  }

  return (
    <View style={styles_lists.container}>
      <Button_Icon
        style={styles_lists.button}
        icon={_icon_check}
        onPress={() => handleOnPressCheck(item)}
      />

      <View style={styles_lists.container_label}>
        <Text style={styles_text.common}>{item.label}</Text>
      </View>

      <Button_Icon
        style={styles_lists.button}
        icon={_icon_edit}
        onPress={() => handleEditOnPress(item)}
      />
    </View>
  );
}