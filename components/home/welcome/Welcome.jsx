import React from 'react'
import { View, Text } from 'react-native'
import styles from "./welcome.style";


const Welcome = () => {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Hello</Text>
      <Text style={styles.welcomeMessage}>Finf your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>
        </View>
    </View>
  )
}

export default Welcome