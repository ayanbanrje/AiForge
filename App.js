// // src/App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';  // Import the separated AppNavigator
import Menu from './src/components/Menu';  // Menu is always visible

import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Menu will always be displayed */}


      {/* Navigation system */}
      <NavigationContainer>
        <Header title="My App" />
        <Menu />
        <AppNavigator />
        <Footer/>
      </NavigationContainer>
      {/* <HomeScreen/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,  // Add padding if needed for space above menu
  },
});

// badri's code don't delete->>> src/App.js
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator'; // Import the separated AppNavigator
// import Menu from './src/components/Menu'; // Menu is always visible
// import Header from './src/components/Header/Header';
// import Footer from './src/components/Footer/Footer';
// import HomeScreen from './src/screens/HomeScreen';

// const App = () => {
//   const [isInitialLoad, setIsInitialLoad] = useState(true); // State to track initial load
//   const handleMenuPress = () => {
//     setIsInitialLoad(false); // Set to false when menu is pressed
//   };

//   return (
//     <View style={styles.container}>
//       {/* Navigation system */}
//       <NavigationContainer>
//         {isInitialLoad ? ( // Conditionally render HomeScreen or AppNavigator
//           <HomeScreen />
//         ) : (
//           <>
//             <Header title="My App" />
//             <Menu onMenuPress={handleMenuPress} />
//             <AppNavigator />
//             <Footer />
//           </>
//         )}
//       </NavigationContainer>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: 50,  // Add padding if needed for space above menu
//   },
// });

