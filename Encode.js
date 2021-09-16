
'use strict';

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class Encode extends Component {
    state = {
        text: 'http://jm-portfoliodev-web.projets.simplon-roanne.com/',
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                />
                <QRCode
                    value={this.state.text.length > 0 ? this.state.text : "health app"}
                    size={350}
                    bgColor='#000000'
                    fgColor='#000000' />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('Encode', () => Encode);

module.exports = Encode;