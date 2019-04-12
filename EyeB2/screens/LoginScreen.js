import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends Component {
     signInwithGoogleAsync = async () => {
        try{
            const result = await Expo.Google.logInAsync({
                behaviour: 'web',
                //androidClienteId:"833456763323-ig9ndr0tbvb62jv4ddn6j8pos3a49m35.apps.googleusercontent.com",
                
                iosClientId: '603720861549-ihp59iktfcifpdppr4fkitp2v09qlm87.apps.googleusercontent.com',
                scopes: ['profile','email']
            });
            if (result.type === 'success'){
                return result.acessToken;
            } else {
                return {cancelled: true};
            }
        } catch(e){
            return {error:true}
        }    
    }
    render() {
        return (
            <View style={styles.container}>
               <Button title = "Sign in with Google" onPress={() => this.signInwithGoogleAsync()}>
               </Button>

            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});