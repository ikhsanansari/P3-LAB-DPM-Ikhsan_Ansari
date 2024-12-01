import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

const Profile = () => {
  useEffect(() => {
    console.log('Profile screen mounted');
    return () => {
      console.log('Profile screen unmounted');
    };
  }, []); // Runs once on mount and cleanup on unmount

  return (
    <View style={styles.container}>
      <Navbar />
      <Header />
      <View style={styles.tabContainer}>
        <View style={styles.tabIcon}></View>
        <View style={styles.tabIcon}></View>
        <View style={styles.tabIcon}></View>
      </View>
      <View style={styles.grid}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <View key={index} style={styles.gridItem}></View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ddd',
    borderRadius: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  gridItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
});

export default Profile;
