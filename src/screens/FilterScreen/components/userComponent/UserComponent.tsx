import React from "react";
import {View,Text} from 'react-native';
import styles from './styles';


const UserComponents=({})=>{

    return (
        <View style={styles.userStyle}>
            <View style={styles.profileStyle}>
                <Text style={styles.profileTxt}>A</Text>
            </View>
            <View style={styles.nameStyle}>
            <Text style={styles.userStyle}>Username</Text>
            <Text style={styles.userTypeTxt}>Username</Text>
            </View>
        </View>
    );
};


export default UserComponents;
