import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import globalStyles from '../../../globalStyle';
import Colors from '../../../assets/constant/colors';

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Text style={globalStyles.fz_16_bold}>Node Congiuration</Text>
            <Text style={[globalStyles.fz_16, { paddingVertical: 10 }]}>Paragraph text with style text M. Invidunt ut labore et dolore magna aliquy erat, sed diam voluptua. At vero eos et accusam et jus to duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
    // topView : {
    //     flex: 1,
    //     padding: 10,
    // },
  container: {
    backgroundColor: Colors.white,
    padding: 16
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
