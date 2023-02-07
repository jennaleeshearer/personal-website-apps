import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { WebView } from 'react-native-webview';

const website_link = 'https://jennaleeshearer.netlify.app/';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: website_link}}
          onLoad={console.log('Loaded Website')}
          allowsBackForwardNavigationGestures
        />
      </View>
    </SafeAreaView>
  )
}
