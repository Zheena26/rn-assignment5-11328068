// screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../screens/ThemeContext';

const HomeScreen = () => {
  const { colors } = useTheme();
  useEffect(() => {
    console.log('HomeScreen rendered with colors:', colors);
  }, [colors]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome back,</Text>
        <Text style={[styles.title1, { color: colors.text }]}>Eric Atsu</Text>
        <Image source={require('../assets/Card.png')} style={styles.mastercardImage} />

        <View style={styles.featuresRow}>
          <TouchableOpacity style={styles.feature}>
            <Image source={require('../assets/send.png')} style={styles.featureIcon} />
            <Text style={[styles.featureText, { color: colors.text }]}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <Image source={require('../assets/receive.png')} style={styles.featureIcon} />
            <Text style={[styles.featureText, { color: colors.text }]}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <Image source={require('../assets/loan.png')} style={styles.featureIcon} />
            <Text style={[styles.featureText, { color: colors.text }]}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <Image source={require('../assets/topUp.png')} style={styles.featureIcon} />
            <Text style={[styles.featureText, { color: colors.text }]}>Topup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionRow}>
          <Text style={[styles.transactionText, { color: colors.text }]}>Transactions</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.additionalInfo}>
      
            <Image source={require('../assets/apple.png')} style={styles.logo} />
            <Text style={[styles.storeText, { color: colors.text }]}>Apple Store</Text>
          <Text style={[styles.amountText, { color: colors.text }]}>-$5.99</Text>
        </View>
        <Text style={[styles.entertainmentText, { color: colors.text }]}>Entertainment</Text>
        
        <View style={styles.additionalInfo}>
    
            <Image source={require('../assets/spotify.png')} style={styles.logo} />
                 <Text style={[styles.storeText, { color: colors.text }]}>Spotify</Text>
         <Text style={[styles.amountText, { color: colors.text }]}>-$12.99</Text>
        </View>
        <Text style={[styles.musicText, { color: colors.text }]}>Music</Text>

        <View style={styles.additionalInfo}>
      
            <Image source={require('../assets/moneyTransfer.png')} style={styles.logo} />
            <Text style={[styles.storeText, { color: colors.text }]}>Money Transfer</Text>
        
          <Text style={[styles.amountText, { color: colors.text }]}>-$300</Text>
        </View>
        <Text style={[styles.musicText, { color: colors.text }]}>Transaction</Text>

        <View style={styles.additionalInfo}>
     
            <Image source={require('../assets/grocery.png')} style={styles.logo} />
            <Text style={[styles.storeText, { color: colors.text }]}>Grocery</Text>
       
          <Text style={[styles.amountText, { color: colors.text }]}>-$88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  searchButton: {
    padding: 10,
    height: 70,
    width: 70,
    borderRadius: 20,
    backgroundColor: '#FAF9F6',
  },
  searchIcon: {
    width: 35,
    height: 35,
    tintColor: 'black',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '200',
    marginBottom: 20,
    color: 'gray',
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mastercardImage: {
    width: '99%',
    height: 800,
    marginBottom: 20,
    borderRadius: 10,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  feature: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  featureText: {
    fontSize: 16,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  transactionText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginVertical: 40,
  },
  storeText: {
    fontSize: 20,
    padding: '10',
    alignContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'left',
  },
  amountText: {
    fontSize: 15,
    alignContent: 'flex-end',
  },
  entertainmentText: {
    fontSize: 15,
    textAlign: 'left',
 
  },
  musicText: {
    fontSize: 15,
    textAlign: 'left',
    color: 'gray',
  },
});

export default HomeScreen;
