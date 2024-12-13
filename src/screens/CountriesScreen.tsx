import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useGetCountriesByRegionQuery } from '../services/features/countries/countriesSlice';

export default function CountriesScreen() {
  const route = useRoute();
  const { region } = route.params;

  const { data, isLoading, error } = useGetCountriesByRegionQuery(region);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data</Text>;

  return (
    <SafeAreaView>
      <Text>Countries in {region}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.name.common}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.cca3}
      />
    </SafeAreaView>
  );
}
