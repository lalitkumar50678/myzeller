import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BLACK, GRAY } from '../../utility/Colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerView:{
        marginTop: 30,
        marginStart: 30,
        paddingBottom: 10,
    },
    headerTxt:{
        fontSize: 18,
        fontWeight: '500',
        color: BLACK,
    },
    dividerline:{
        width: '90%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: GRAY,
        alignItems: 'center',
    },
    listStyle:{
        marginTop: 10,
    },
});
export default styles;
