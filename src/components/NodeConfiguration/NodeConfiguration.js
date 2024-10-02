import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Card containerStyle={styles.card}>
          <Card.Title>Card 1</Card.Title>
          <Card.Divider />
          <Button title="Press Me" onPress={() => console.log("Button 1 Pressed")} />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Card 2</Card.Title>
          <Card.Divider />
          <Button title="Press Me" onPress={() => console.log("Button 2 Pressed")} />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Card 3</Card.Title>
          <Card.Divider />
          <Button title="Press Me" onPress={() => console.log("Button 3 Pressed")} />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Card 4</Card.Title>
          <Card.Divider />
          <Button title="Press Me" onPress={() => console.log("Button 4 Pressed")} />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Card 5</Card.Title>
          <Card.Divider />
          <Button title="Press Me" onPress={() => console.log("Button 5 Pressed")} />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row', // Arrange cards in a row
    flexWrap: 'wrap', // Allow wrapping to the next line
    justifyContent: 'flex-start', // Align cards to the start (left)
  },
  card: {
    width: '30%', // Set card width to 30%
    margin: 5, // Add some margin to create space between cards
  },
});

export default App;
