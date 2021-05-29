import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  }

  return (
    <View style={style.screen}>
      <Button title="Add Title" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
