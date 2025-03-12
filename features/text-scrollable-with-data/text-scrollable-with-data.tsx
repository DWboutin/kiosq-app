import { StyleSheet, Text, View } from "react-native";
import { DATA } from "../../data";

export const TestScrollableWithData = () => {
  return (
    <View>
      {DATA.map((book) => {
        return (
          <Text style={styles.scrollText} key={book.id}>
            {book.title}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollText: {
    fontSize: 19,
    textAlign: "center",
    padding: 16,
  },
});
