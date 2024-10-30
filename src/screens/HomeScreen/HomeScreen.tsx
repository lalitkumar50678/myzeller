import React, { useEffect } from 'react';
import { View,Button } from 'react-native';
import styles from './styles';
import { FILTER_TXT } from '../../utility/Strings';
import { useNavigation } from '@react-navigation/native';


const HomeScreen: React.FC = ()=>{
    const navigation = useNavigation();


    const onFilterPageClick = ()=>{
        navigation.navigate('FilterScreen');
    };


    return (
        <View style={styles.container}>
            <Button title={FILTER_TXT}
            onPress={onFilterPageClick}/>
        </View>
    );
};
export default HomeScreen;
