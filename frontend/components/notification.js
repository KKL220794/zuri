import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";

{
  /*Configure our notification settings:*/
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const generateNotification = async () => {
  //show the notification to the user
  Notifications.scheduleNotificationAsync({
    //set the content of the notification
    content: {
      title: "Red Flag",
      body: "Could please assist patient in person",
    },
    trigger: null,
  });

return (
  <View style={styles.container}>
    {/*When clicked, execute the generateNotification function*/}
    <Button
      title="Generate notification"
      onPress={() => generateNotification()}
    />
  </View>
);
};

export default generateNotification;