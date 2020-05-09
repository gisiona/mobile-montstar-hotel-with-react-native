
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Card from './pages/card';
import Perfil from './pages/perfil';

const AppStack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />            
                <AppStack.Screen name="Dashboard" component={Dashboard} />
                <AppStack.Screen name="Card" component={Card} />
                <AppStack.Screen name="Perfil" component={Perfil} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default Routes;