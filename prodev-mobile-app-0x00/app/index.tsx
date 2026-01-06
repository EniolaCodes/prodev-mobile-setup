import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MY first mobile app!</Text>
      <Text>Edit `app/index.tsx` to customize this screen.</Text>
      <Text>
        Tap reload or press <Text style={{ fontWeight: "bold" }}>r</Text> in the
        terminal to see changes.
      </Text>
    </View>
  );
}
