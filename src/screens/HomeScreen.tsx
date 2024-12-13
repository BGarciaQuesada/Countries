import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetAllRegionsQuery } from '../services/features/countries/countriesSlice';

export default function HomeScreen() {
  const { data, isLoading, error } = useGetAllRegionsQuery();
  const navigation = useNavigation();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data</Text>;

  // Filtrar regiones únicas (sin duplicados)
  const regions = data ? [...new Set(data.map((country) => country.region))] : [];

  return (
    <SafeAreaView>
      <Text>Select a Region</Text>
      <FlatList
        data={regions}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Countries', { region: item })}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
}
