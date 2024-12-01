import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  const [followers, setFollowers] = useState(200);

  useEffect(() => {
    console.log('Header component mounted');
    return () => {
      console.log('Header component unmounted');
    };
  }, []); // Runs once on mount and cleanup on unmount

  useEffect(() => {
    console.log(`Followers updated: ${followers}`);
  }, [followers]); // Runs whenever "followers" changes

  const handleFollow = () => {
    setFollowers(followers + 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../../../assets/foto oke.jpg')} />
      <Text style={styles.name}>Ikhsan Ansari</Text>

      


      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>11</Text>
          <Text style={styles.statLabel}>Post</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{followers}</Text>
          <Text style={styles.statLabel}>Follower</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>439</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.followButton} onPress={handleFollow}>
          Follow
        </Text>
      </View>
      <Text style={styles.bio}>
        Programmer{'\n'}UIR Student{'\n'}Skills{'\n'}Web Design{'\n'}Web Programming
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 17,
    
  },
  stat: {
    alignItems: 'center',
    padding: 20,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    marginBottom: 16,
  },
  followButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default Header;
