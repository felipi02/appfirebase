import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"menu"}} />
      <Stack.Screen name="fireBase" options={{title:"FireBase"}}/>
      <Stack.Screen name="contato" options={{title:"Contato"}}/>
      <Stack.Screen name="notificacao" options={{title:"Notificação"}}/>
    </Stack>
  );
}
