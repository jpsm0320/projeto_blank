import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Import necessary components

function App() {
  return (
    <View style={styles.container}> {/* Use View for the main container */}
      <Text style={styles.name}>João Paulo</Text> {/* Use Text for text content */}

      <Image
        source={require("./assets/lendas.jpg")}
        style={styles.profileImage} // Apply styles for the image
        resizeMode="contain" // Or 'cover' or 'stretch' to control how the image fits
      />

      <Text style={styles.description}> {/* Use Text for the description */}
        Adoro jogar futebol e ir pra festas , extremamente ativo. Curto loiras e morenas. Quem desperdiça buraco é prefeitura!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the entire screen
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    padding: 20, // Add some padding around the content
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 350, // Adjust width as needed
    height: 250, // Adjust height as needed
    borderRadius: 75, // Make it a circle (half of width/height)
    marginBottom: 15,
  },
  description: {
    fontSize: 30,
    textAlign: 'center', // Center the text
    lineHeight: 24, // Improve readability with line height
  },
});

export default App;