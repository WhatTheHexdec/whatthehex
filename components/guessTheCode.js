import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import createHex from "../createHex";

const stylesheet = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  colorContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
  },
  color: {
    flex: 1,
    alignSelf: "stretch",
    height: 200,
  },
  toGuess: {
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  secretColor: {
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  input: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    height: 60,
    borderWidth: 1,
    borderColor: "#4d5982",
    borderRadius: 16,
    padding: 8,
  },
});

export default function () {
  const [secretColor, setSecretColor] = useState(createHex());
  const [guess, setGuess] = useState("ffffff");

  const handleInput = (text) => {
    setGuess(text);
    if (text === secretColor) {
      alert("Yeah");
      setSecretColor(createHex());
      setGuess("ffffff");
    }
  };

  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.colorContainer}>
        <View
          style={{
            ...stylesheet.color,
            ...stylesheet.secretColor,
            backgroundColor: `#${secretColor}`,
          }}
        ></View>
        <View
          style={{
            ...stylesheet.color,
            ...stylesheet.toGuess,
            backgroundColor: `#${guess}`,
          }}
        ></View>
      </View>
      <TextInput
        value={guess}
        onChangeText={(text) => handleInput(text)}
        style={stylesheet.input}
      />
      <StatusBar />
    </View>
  );
}
