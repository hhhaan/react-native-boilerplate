import { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useLayoutSize = (): [
    { width: number | null; height: number | null },
    (event: LayoutChangeEvent) => void
] => {
    const [size, setSize] = useState<{
        width: number | null;
        height: number | null;
    }>({
        width: null,
        height: null,
    });

    const onLayout = useCallback((event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);

    return [size, onLayout];
};
