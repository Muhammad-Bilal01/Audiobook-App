import { useAuth } from '@clerk/clerk-expo'
import React from 'react'
import { Button, Text, View } from 'react-native'



export default function profile() {
    const { signOut } = useAuth()
    return (
        <View>
            <Button title='Sign out' onPress={() => { signOut() }} />
        </View>
    )
}