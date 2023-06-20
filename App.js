import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import Bubbles from "./components/bubbles";
import GuessTheCode from "./components/guessTheCode";

export default function App() {
  const [which, setWhich] = useState("bubbles");
  const [y, setY] = useState(Infinity);

  const handleTouchStart = (e) => {
    setY(e.nativeEvent.pageY);
  };

  const handleTouchEnd = (e) => {
    const delta = y - e.nativeEvent.pageY;
    if (Math.abs(delta) < 2) return;
    if (delta > 0) {
      setWhich("");
    } else if (delta < 0) {
      setWhich("bubbles");
    }
  };

  return (
    <View
      style={{ flex: 1 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {which === "bubbles" ? <Bubbles /> : <GuessTheCode />}
      {/*<Pressable
        style={{
          position: "absolute",
          bottom: 32,
          right: 32,
          height: 60,
          width: 60,
          backgroundColor: "#c9e6ff",
          borderRadius: 10,
          // flex: 1,
          // flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          which === "bubbles" ? setWhich("") : setWhich("bubbles");
        }}
      >
        <Text
          style={{
            height: 35,
            width: 60,
            fontSize: 30,
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          😊
        </Text>
        </Pressable>*/}
    </View>
  );
}
