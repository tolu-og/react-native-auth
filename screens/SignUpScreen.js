import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {React, useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import SocialSignInButton from '../components/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    

    const onRegisterPressed = () =>{
        navigation.navigate('ConfirmEmailScreen')
    }

    const onSignInPressed = () =>{
        navigation.navigate('SignInScreen')
    }
    const onTermsPressed = () =>{
        console.warn(" Terms and Conditions")
    }
    const onPrivacyPressed = () =>{
        console.warn(" Privacy Pressed")
    }

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword (email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:',user.email)
        })
        .catch(error => alert(error.message))
    } 
 
    

  return (
      <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
        <Text style ={styles.title}>Create an Account</Text>

        <CustomInput placeholder='Email' 
        value ={email} setValue ={setEmail} />

        <CustomInput placeholder='Password'
         value ={password} setValue ={setPassword}
          secureTextEntry= {true} />

        

        <CustomButton text = "Register " onPress={handleSignUp}/>

        <Text style ={styles.text}>By registering, you confirm that you accept our <Text style ={styles.link}
        onPress ={onTermsPressed}>Terms of Use </Text>and <Text style ={styles.link} onPress ={onPrivacyPressed}>Privacy 
            Policy </Text>
        </Text>

      <SocialSignInButton />
      <CustomButton text = "Have an Account? Sign In " onPress={onSignInPressed} type="TERTIARY"/>

    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link: {
            color: '#FDB075'
    },
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: '#051C60',
        margin: 10,
    }
})

export default SignUpScreen