import React, {useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBars from '../../atomics/StatusBar/StatusBars';
import CardList from '../../components/CardList/CardList';
import Card from '../../components/ProductCard/Card';
import COLORS from '../../constants/colors';
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from '../../store/services/products';

import {SearchBar} from 'react-native-elements';

export default Home = ({navigation}) => {
  const [input, setInput] = useState();
  const {data, isLoading} = useGetProductsQuery();
  const dos = useSearchProductsQuery(input);

  const renderItem = data => <Card navigation={navigation} item={data?.item} />;

  const renderItemSearch = data => (
    <Card navigation={navigation} item={data?.item} />
  );

  return (
    <SafeAreaView style={{backgroundColor: COLORS.gray}}>
      <StatusBars testID="messageText" />
      <KeyboardAvoidingView>
        <SearchBar
          placeholder="Search Category..."
          onChangeText={input => setInput(input)}
          value={input}
          cancelIcon={true}
          containerStyle={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: 50,
            margin: 5,
          }}
          inputContainerStyle={{backgroundColor: 'white'}}
        />
        <ScrollView>
          {isLoading || dos.isLoading ? (
            <ActivityIndicator size="large" />
          ) : input ? (
            <CardList
              navigation={navigation}
              data={dos?.data}
              renderItem={renderItemSearch}
            />
          ) : (
            <CardList
              navigation={navigation}
              data={data}
              renderItem={renderItem}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
