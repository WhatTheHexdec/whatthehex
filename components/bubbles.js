import { Pressable, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import useGenerateBlobs from "../hooks/useGenerateBlobs";
import useGenerateColor from "../hooks/useGenerateColor";
import createHex from "../createHex";
import { useState } from "react";

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  colorBlob: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  color: {
    fontSize: 40,
    marginBottom: 20,
    color: "#4d5982",
  },
  difficulty: {
    marginTop: 40,
    width: 240,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ctrl: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c9e6ff",
    color: "#4d5982",
    borderRadius: 10,
  },
  blobs: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default function () {
  const [difficulty, setDifficulty] = useState(5);
  const [color, setColor] = useGenerateColor();
  const [blobs, generateBlobs] = useGenerateBlobs(color);
  const [colorsGiven, setColorsGiven] = useState(1);
  const [colorsGuessed, setColorsGuessed] = useState(1);

  const handlePress = (blob) => {
    setColorsGuessed((previous) => previous + 1);
    if (blob === color) {
      alert("Yeah");
      let newColor = createHex();
      setColor(newColor);
      setColorsGiven((previous) => previous + 1);
      generateBlobs(newColor, difficulty);
    }
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    let newColor = createHex();
    setColor(newColor);
    // setColorsGiven((previous) => previous + 1);
    generateBlobs(newColor, newDifficulty);
  };

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.color}>
        #{color} (
        {colorsGuessed === 0
          ? "100"
          : Math.floor((colorsGiven / colorsGuessed) * 100)}
        %)
      </Text>
      <View style={stylesheet.blobs}>
        {blobs.map((blob, idx) => (
          <Pressable
            key={idx}
            onPress={() => handlePress(blob)}
            style={{ ...stylesheet.colorBlob, backgroundColor: `#${blob}` }}
          ></Pressable>
        ))}
      </View>
      <View style={stylesheet.difficulty}>
        <Pressable
          style={stylesheet.ctrl}
          onPress={() => handleDifficultyChange(5)}
        >
          <Text>5</Text>
        </Pressable>
        <Pressable
          style={stylesheet.ctrl}
          onPress={() => handleDifficultyChange(10)}
        >
          <Text>10</Text>
        </Pressable>
        <Pressable
          style={stylesheet.ctrl}
          onPress={() => handleDifficultyChange(15)}
        >
          <Text>15</Text>
        </Pressable>
      </View>
      <StatusBar />
    </View>
  );
}
