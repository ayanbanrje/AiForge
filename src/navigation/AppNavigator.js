// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Adjust the import according to your structure
import CommonLayout from '../components/CommonLayout'; // Make sure this path is correct

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={() => (
                    <CommonLayout>
                        <HomeScreen />
                    </CommonLayout>
                )}
            />
            {/* Add more screens here */}
        </Stack.Navigator>
        //  <Stack.Navigator>
        //     <Stack.Screen 
        //         name="Home" 
        //         component={() => (
        //             <CommonLayout>
        //                 <HomeScreen />
        //             </CommonLayout>
        //         )}
        //     />
        // </Stack.Navigator>

    );
};

export default AppNavigator;
