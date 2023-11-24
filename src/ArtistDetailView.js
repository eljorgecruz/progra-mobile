import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ArtistDetailView extends Component {
  render() {
    const { image, name, stremeable, listeners, id } = this.props.artist;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Listeners</Text>
              <Text style={styles.statsValue}>{listeners}</Text>
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Streamable</Text>
              <Text style={[styles.statsValue, { color: stremeable === 1 ? 'green' : 'red' }]}>
                {stremeable === 1 ? 'True' : 'False'}
              </Text>
            </View>

          </View>
          <Text style={styles.id}>{id}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statsItem: {
    flex: 1,
    alignItems: 'center',
  },
  statsLabel: {
    fontSize: 14,
    color: '#888',
  },
  statsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  id: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

