import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import ToDoList from "../components/ToDoList";

export default function Home() {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        marginVertical: 60,
      }}
    >
      <View>
        <Text style={{ fontFamily: "Poppins", fontSize: 25 }}>To Do List</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ToDoList />
      </View>
    </View>
  );
}
