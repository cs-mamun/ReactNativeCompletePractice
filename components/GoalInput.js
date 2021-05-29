import React, {useState} from 'react';
import { View,TextInput,Button, StyleSheet, Modal } from 'react-native';

const goalInput =(props)=> {
  const [goalEntered, setGoalEntered] = useState("");
  const goalEnteredHandler = (enteredText) => {
    setGoalEntered(enteredText);
  };
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal!"
            editable
            maxLength={40}
            style={styles.textInput}
            onChangeText={goalEnteredHandler}
          />
          <Button title="ADD" onPress={props.onAddGoal.bind(this)} />
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
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
});

export default goalInput;