import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_NOTIFICATIONS_KEY } from '../utils/keys'

/*
	last date of quiz is before today or null
		if before quiz time, then schedule for that time
		if after quiz time, then notify immediately
	schedule notification for tomorrow
*/
const quizHours = 8
const quizMinutes = 0
const oneDay = 1000 * 60 * 60 * 24

export const handleInitialSchedule = () => (dispatch, getState) => {
	initialScheduleAsync()
}

const initialScheduleAsync = async () => {
	const { status } = await Notifications.requestPermissionsAsync()
	if (status !== 'granted') {
		alert('Notification permission is required to have this App fully functioning')
		return
	}
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		}),
	})
	const lastQuizDateTime = await AsyncStorage.getItem(STORAGE_NOTIFICATIONS_KEY)
	await Notifications.cancelAllScheduledNotificationsAsync()
	if (!lastQuizDateTime || truncateDate(new Date(lastQuizDateTime)) < truncateDate(new Date(Date.now()))) {
		scheduleWithShift(0)
	}
	scheduleWithShift(oneDay)
}

export const handleRegisterQuizTime = () => (dispatch, getState) => {
	registerQuizTimeAsync()
}

const registerQuizTimeAsync = async () => {
	await AsyncStorage.setItem(STORAGE_NOTIFICATIONS_KEY, new Date(Date.now()).toString())
	initialScheduleAsync()
}

const truncateDate = (date) => {
	date.setHours(0)
	date.setMinutes(0)
	date.setMilliseconds(0)
}

const scheduleWithShift = (shift) => {
	const quizDate = new Date(Date.now() + shift)
	quizDate.setHours(quizHours)
	quizDate.setMinutes(quizMinutes)
	quizDate.setSeconds(0)
	quizDate.setMilliseconds(0)
	const trigger = new Date(Date.now()) < quizDate ? quizDate : null

	Notifications.scheduleNotificationAsync({
		content: {
			title: 'Study time!',
			body: "👋 don't forget to take some quiz for today!"
		},
		trigger: trigger
	})
}