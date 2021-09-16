import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { selectHistory } from './action';

function DecodeConnect({ selectHistory }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    function getData(data) {
        selectHistory(data)
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ props, data }) => {
        setScanned(true);
        getData(data);
        alert(Linking.openURL(data).catch);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}


const mapStateToProps = (state, props, data) => {
    return {
        props: props,
        state: state,
        data: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectHistory: (payload) => dispatch(selectHistory(payload)),
    };
}

const Decode = connect(mapStateToProps, mapDispatchToProps)(DecodeConnect);

export default Decode;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
