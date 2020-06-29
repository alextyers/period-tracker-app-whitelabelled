import firebase from 'react-native-firebase'

export const createNotificationChannel = () => {
  const channel = new firebase.notifications.Android.Channel(
    'Scheduled', // channelId
    'Scheduled Notifications Channel', // channel name
    firebase.notifications.Android.Importance.Max, // channel importance
  ).setDescription('Used for getting reminder notification') // channel description
  firebase.notifications().android.createChannel(channel) // Create the android notification channel
}

export const cancelAllScheduledNotifications = () => {
  return firebase.notifications().cancelAllNotifications()
}

export const setScheduledNotification = async ({ time, title, body }) => {
  return firebase.notifications().scheduleNotification(buildNotification({ title, body }), {
    fireDate: time.valueOf(),
    // @ts-ignore
    exact: true, // this was for a exact timing issue with notifications may become deprecated as it doesn't exist on the type
  })
}

const buildNotification = ({ title, body }) => {
  // @ts-ignore
  const notification = new firebase.notifications.Notification({
    sound: 'default',
    show_in_foreground: true,
  })
    .setTitle(title) // Title of the notification
    .setBody(body) // body of notification
    .android.setPriority(firebase.notifications.Android.Priority.Max) // set priority in Android
    .android.setChannelId('Scheduled') // should be the same when creating channel for Android
    .android.setAutoCancel(true) // To remove notification when tapped on it
  return notification
}

export const notificationListener = () => {
  return firebase.notifications().onNotification(notification => {
    const { title, body } = notification
    firebase
      .notifications()
      .displayNotification(buildNotification({ title, body }))
      .catch(err => {
        throw new Error('Display notificaiton error')
      })
  })
}
