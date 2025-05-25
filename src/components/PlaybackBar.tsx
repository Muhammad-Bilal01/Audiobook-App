import { useState } from 'react';
import { Pressable, Text, View, GestureResponderEvent } from 'react-native';

type PlaybackBarProps = {
    currentTime: number,
    duration: number,
    onSeek: (seconds: number) => void
}

export default function PlaybackBar({ currentTime, duration, onSeek }: PlaybackBarProps) {

    const [width, setWidth] = useState(0)
    const progress = currentTime / duration
    const formatTime = (time: number) => {
        const minute = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minute}:${seconds.toString().padStart(2, '0')}`
    }

    const onHandleSeek = (event: GestureResponderEvent) => {
        const pressX = event.nativeEvent.locationX
        const percentage = pressX / width

        // calcaulate percentage according to seconds
        const seekToSeconds = Math.min(Math.max(duration * percentage, 0), duration)

        onSeek(seekToSeconds)
    }

    return (
        <View className='gap-4'>

            {/* playbar */}
            <Pressable onPress={onHandleSeek}
                onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
                hitSlop={20}
                className='w-full bg-slate-900 h-2 rounded-full justify-center'>
                {/* bar */}
                <View
                    className='bg-orange-400 h-full rounded-full'
                    style={{ width: `${progress * 100}%` }}
                />
                {/* bar point */}
                <View
                    className='absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400'
                    style={{ left: `${progress * 100}%` }}
                />
            </Pressable>

            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>{formatTime(currentTime)}</Text>
                <Text className='text-gray-400'>{formatTime(duration)}</Text>
            </View>
        </View>
    );
}
