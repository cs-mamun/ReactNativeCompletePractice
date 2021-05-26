import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goalEntered, setGoalEntered] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalEnteredHandler =(enteredText) => {
    setGoalEntered(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, goalEntered])
  }

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Course Goal!"
          editable
          maxLength={40}
          style={style.textInput}
          onChangeText={goalEnteredHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoal.map(goal => <Text>{goal}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  screen: {
    padding: 30,
  },
});
