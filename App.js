import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  initialState = {
    titleMessage: "desreveR | Reversed",
    bodyMessage: [
      "1. Take turns to be Player (who cannot see the phone) and the Reverser.\n" +
        "2. Reversers read aloud the reversed word to hint the Player.\n" +
        "3. Players have to guess the original unreversed word.\n",
    ],
    gameMessage: "reversed!",
    endMessage: "stop!",
    words: [
      "desreveR | Reversed",
      "etarepooc | cooperate",
      "etaidemretni | intermediate",
      "elor | role",
      "neerg | green",
      "latigid | digital",
      "maerts | stream",
      "nruter | return",
      "ecargsid | disgrace",
      "repsihw | whisper",
      "etaromemmoc | commemorate",
      "llif | fill",
      "elicnocer | reconcile",
      "etalfni | inflate",
      "woble | elbow",
      "nettor | rotten",
      "ksed | desk",
      "nolas | salon",
      "nalp | plan",
      "hctits | stitch",
      "dia | aid",
      "yzal | lazy",
      "erawa | aware",
      "ni | in",
      "ecar | race",
      "erutaretil | literature",
      "tifeneb | benefit",
      "ylekilnu | unlikely",
      "nenil | linen",
      "noitatneiro | orientation",
      "desoppo | opposed",
      "tih | hit",
      "egarevoc | coverage",
      "ralucitrap | particular",
      "troser | resort",
      "enutrof | fortune",
      "lufthguoht | thoughtful",
      "tnasaelpnu | unpleasant",
      "xobonoce | econobox",
      "ytilanosrep | personality",
      "pandik | kidnap",
      "elbiB | Bible",
      "llup | pull",
      "elbatcepser | respectable",
      "niatrec | certain",
      "lacinahcem | mechanical",
      "tsae | east",
      "lleh | hell",
      "ecnaveler | relevance",
      "raeg | gear",
      "ecaep | peace",
      "ydotsuc | custody",
      "hsac | cash",
      "htuom | mouth",
      "kcurt | truck",
      "rennur | runner",
      "erawdrah | hardware",
      "lairepmi | imperial",
      "sa | as",
      "mudnaromem | memorandum",
      "ngier | reign",
      "ylenol | lonely",
      "dnal | land",
      "noitaralced | declaration",
      "mlac | calm",
      "moorhtab | bathroom",
      "reganeet | teenager",
      "noitcua | auction",
      "egludni | indulge",
      "etihw | white",
      "raf | far",
      "feihc | chief",
      "pop | pop",
      "rovalf | flavor",
      "sisirc | crisis",
      "tsurt | trust",
      "ytlausac | casualty",
      "yfiralc | clarify",
      "dercas | sacred",
      "noisivorp | provision",
      "tcnitxe | extinct",
      "egru | urge",
      "evah | have",
      "ralohcs | scholar",
      "aes | sea",
      "tsitra | artist",
      "noitacude | education",
      "laviver | revival",
      "msinahcem | mechanism",
      "yal | lay",
      "gnivom | moving",
      "hsael | leash",
      "naretev | veteran",
      "elttob | bottle",
      "neeuq | queen",
      "launam | manual",
      "yarp | pray",
      "hcir | rich",
      "eniltuo | outline",
      "thgif | fight",
      "lufesu | useful",
    ],
  };

  state = initialState;

  // Declare new state variables
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  retrieveMessage = () => {
    return count === 0 ? state.bodyMessage[0] : null;
  };

  updateHighScore = () => {
    newHighScore = currentScore > highScore ? currentScore : highScore;
    setHighScore(newHighScore);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Skill: {currentScore}; High Score: {highScore}
      </Text>

      {<Text style={styles.bodyText}>{retrieveMessage()}</Text>}

      <Text style={styles.reverseText}>{state.words[count]}</Text>

      <Text
        style={styles.gameWordText}
        onPress={() => {
          setCount(Math.floor(Math.random() * Math.floor(state.words.length)));
          setCurrentScore(currentScore + 1);
        }}
      >
        {state.gameMessage}
      </Text>

      <Text
        style={styles.gameWordText}
        onPress={() => {
          updateHighScore();
          setCount(0);
          setCurrentScore(0);
        }}
      >
        {state.endMessage}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
    justifyContent: "center",
  },
  reverseText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    justifyContent: "center",
  },
  bodyText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "purple",
    textAlign: "center",
    justifyContent: "center",
  },
  gameWordText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "pink",
    textAlign: "center",
    justifyContent: "center",
  },
});
