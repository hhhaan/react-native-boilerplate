import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="default" />
        </SafeAreaProvider>
    );
};
