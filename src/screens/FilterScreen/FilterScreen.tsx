import React, {useEffect, useMemo, useState} from 'react';
import {View,  FlatList} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import styles from './styles';
import {useQuery} from '@apollo/client';
import GET_ZELLER from './schema';
import {ADMIN_USER, USER_TYPE_TXT} from '../../utility/Strings';
import {UserType} from './FilterTypes';
import {GREEN} from '../../utility/Colors';
import HeaderView from '../../components/Header/HeaderView';
import UserComponents from './components/userComponent/UserComponent';
import SeparatorComponent from '../../components/separatorComponent/SeparatorComponent';

const userTypeArr: UserType[] = [
  {
    id: 1,
    label: 'Admin',
    value: 'Admin',
  },
  {
    id: 2,
    label: 'Manger',
    value: 'Manger',
  },
];

const FilterScreen: React.FC = () => {
  const {loading, error, data} = useQuery(GET_ZELLER);
  const [] = useState([]);

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    console.log(
      'response -> ',
      data?.listZellerCustomers?.items,
      ' error -> ',
      error,
    );
  });

  return (
    <View>
      <View style={styles.headerView}>
        <HeaderView headerTxt={USER_TYPE_TXT} />
        <View style={{alignItems: 'flex-start'}}>
          <RadioForm
            radio_props={userTypeArr}
            initial={0}
            style={{marginTop: 20}}
            //buttonOuterSize={10}
            buttonSize={10}
            onPress={setSelectedId}
            buttonStyle={{backgroundColor: 'red'}}
          />
        </View>
      </View>
      <View style={styles.dividerline} />
      <View style={styles.headerView}>
      <HeaderView headerTxt={ADMIN_USER} />
        <FlatList
        data={data?.listZellerCustomers?.items}
        style={styles.listStyle}
        renderItem={({item,index}) => <UserComponents />}
        ItemSeparatorComponent={()=> <SeparatorComponent />}
         />
      </View>
    </View>
  );
};
export default FilterScreen;
