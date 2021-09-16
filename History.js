import * as React from 'react';
import { selectHistory } from './action/index';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Linking } from "react-native";

const HistoryConnect = ({ state }) => {
    console.log(state);
    const renderItem = () => {
        return Object.keys(state.data).map((key) => {
            return (
                <View>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL(state.data[key])}>
                        {state.data[key]}
                    </Text>
                </View>
            )
        })
    }


    return (
        <View>
            {renderItem()}
        </View>
    );
}

const mapStateToProps = (state, props) => {
    return {
        props: props,
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectHistory: (payload) => dispatch(selectHistory(payload)),
    };
}

const History = connect(mapStateToProps, mapDispatchToProps)(HistoryConnect);

export default History;