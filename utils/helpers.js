import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { getNotification, setNotification, removeNotification } from './api'

export const generateId = () => {
  return Math.random().toString(36).substring(2)
}

const notification = {
  title: 'Time to do Quiz!',
  body: 'Hey! don\'t forget to study today!',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    sticky: false,
  },
}
export const setLocalNotification = () => {
  getNotification()
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(
          ({ status }) => {
            console.log(status)
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMintutes(0)
              Notifications.scheduleLocalNotificationAsync(
                notification,
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              setNotification(true)
            }
          }
        )
      }
    })
}
export const clearLocalNotification = () => {
  return removeNotification()
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
