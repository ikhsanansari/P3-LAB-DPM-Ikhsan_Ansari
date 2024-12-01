import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Navbar;
