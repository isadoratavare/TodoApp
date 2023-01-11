import { Text, View } from "react-native";
import Colors from "../constants/Colors";

export type TodoProps = {
  title: any;
};

export default function Todo({ title }: TodoProps) {
  return (
    <View
      style={{
        padding: 10,
        marginVertical: 5,
        borderColor: Colors.red,
        borderWidth: 2,
        borderRadius: 10,
      }}
    >
      <Text>{title}</Text>
    </View>
  );
}
