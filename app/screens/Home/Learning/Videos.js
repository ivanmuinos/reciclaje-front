import { WebView } from "react-native-webview";

<View style={styles.Container}>

<WebView
    style={{ marginTop: 20, width: 320, height: 230 }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    source={{ uri: "https://www.youtube.com/embed/-ZZPOXn6_9w" }}
/>
</View>

WebViewStyle: {
    margin: 30
},


<TouchableOpacity
style={styles.button}
>
<Icon
    name="info"
    size={30}
    color="#45BD3D"
/>
<Text style={styles.textButtonLearning}>Info...</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.button}
>
<Icon
    name="play"
    size={30}
    color="#45BD3D"
/>
<Text style={styles.textButtonLearning}>Videos</Text>
</TouchableOpacity>