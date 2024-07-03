import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image } style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#d9534f',
    marginTop: 5,
  },
});

export default Card;