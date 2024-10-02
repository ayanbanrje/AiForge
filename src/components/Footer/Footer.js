import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.leftText}>©  Robert Bosch GmbH 2024, All rights reserved.</Text>
      <View style={styles.rightTextContainer}>
        <Text style={styles.rightText}>Imprint</Text>
        <Text style={styles.rightText}>Legal Information</Text>
        <Text style={styles.rightText}>Data Privacy</Text>
        <Text style={styles.rightText}>Disclosure Documents</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,                      // Fixed height for the footer
    width: '100%',                   // Take up full width
    flexDirection: 'row',            // Row direction for children
    alignItems: 'center',            // Center items vertically
    paddingHorizontal: 10,           // Horizontal padding
    backgroundColor: '#f8f8f8',      // Background color
    borderTopWidth: 1,               // Border on top
    borderColor: '#ddd',
  },
  leftText: {
    flex: 1,                         // Allow the left text to grow and take available space
    fontSize: 16,
    whiteSpace: 'nowrap',            // Prevent wrapping
    overflow: 'hidden',              // Hide overflow
    textOverflow: 'ellipsis',         // Show ellipsis for overflowing text
    fontFamily: 'BoschSans-Bold',
  },
  rightTextContainer: {
    flexDirection: 'row',            // Row direction for right text items
    justifyContent: 'flex-end',      // Align items to the right
    gap: 10,                         // Space between right texts
    flex: 1,                         // Allow right text container to take available space
  },
  rightText: {
    fontSize: 16,
    marginLeft: 10,                  // Space between each right text
    whiteSpace: 'nowrap',            // Prevent wrapping
    overflow: 'hidden',              // Hide overflow
    textOverflow: 'ellipsis',         // Show ellipsis for overflowing text
  },
});

export default Footer;
