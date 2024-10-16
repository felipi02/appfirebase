import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"menu"}} />
      <Stack.Screen name="fireBase" options={{title:"FireBase"}}/>
    </Stack>
  );
}
