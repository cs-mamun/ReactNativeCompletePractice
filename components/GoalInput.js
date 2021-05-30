import React, {useState} from 'react';
import { View,TextInput,Button, StyleSheet, Modal } from 'react-native';

const goalInput =(props)=> {
  const [goalEntered, setGoalEntered] = useState("");
  const goalEnteredHandler = (enteredText) => {
    setGoalEntered(enteredText);
  };
  const goalInputHandler =() => {
    props.onAddGoal(goalEntered);
    setGoalEntered('');
  }
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
          <View style={styles.buttonContainer}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
            <Button title="ADD" onPress={goalInputHandler} />
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  }
});

export default goalInput;