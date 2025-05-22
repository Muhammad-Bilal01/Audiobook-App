import { useAuth } from "@clerk/clerk-expo"
import { Redirect, Slot, Stack } from "expo-router"


export default function _layout() {
    const { isSignedIn } = useAuth()

    // if already sign-in redirect to the home page 
    if (isSignedIn) {
        return <Redirect href={"/"} />
    }
    return (
        <Stack />
    )
}
