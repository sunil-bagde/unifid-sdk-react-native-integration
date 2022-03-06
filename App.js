import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const sdkRef = useRef(null);
  let webView;
  const handleSdkInit = () => {
    const sdkKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZGsiLCJqdGkiOiI0YWEyNGZlNS0yZThmLTRiNzUtOWRiYi00OTlmYjZkYmJhYjQiLCJpYXQiOjE2NDYzODM2NTl9.AmakuxSejgxaQfhDBS4PUvFORktmvHPvLhPHdrLAChQ";
    const message = {
      sdkUrl: "SDK_URL",
      sdkKey: sdkKey,
      verifierID: "sasasas",
      message: "Message",
      notification: "Message",
      customData: { name: "Name" },
    };
    webView.postMessage(JSON.stringify({ message: "onInit", value: message }));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "http://192.168.0.100:3000/" }}
        style={styles.frame}
        javaScriptEnabled={true}
        onLoadEnd={handleSdkInit}
        onMessage={(event) => {
          const data = event.nativeEvent.data;
          console.log("data", data);
        }}
        ref={(el) => (webView = el)}
        scalesPageToFit
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
    height: 300,
    width: 300,
  },
});
