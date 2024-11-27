import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './routes';

export const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="default" />
            <Routes />
        </SafeAreaProvider>
    );
};
