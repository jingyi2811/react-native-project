import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Welcome extends React.Component {

    static navigationOptions = {
        header: null,
    }

    logout() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Menu' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(e) => {
                        this.logout()
                    }
                    }
                >
                    <Text style={styles.buttonText}> Logout </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343434',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Cornerstone',
    }

});
