import { FlatList, Text, View } from "react-native";
import Todo from "./Todo";

export default function ToDoList() {
  const lista = ["Arrumar a casa", "Ir para faculdade"];
  const renderItem = ({ item: todo }: any) => {
    return (
      <View>
        <Todo title={todo} />
      </View>
    );
  };
  return (
    <View>
      <FlatList data={lista} renderItem={renderItem} />
    </View>
  );
}
