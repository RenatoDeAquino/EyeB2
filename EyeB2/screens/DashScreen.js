import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DashScreen</Text>
            </View>
        );
    }
}
export default DashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});