import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useExitOnBack from '../../components/backHandler/Backhandler'

const Notification = () => {
  useExitOnBack(false)
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})