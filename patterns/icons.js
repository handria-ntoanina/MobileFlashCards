import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export const Add = (props) => {
	return <Ionicons name='add-circle' {...props}/>
}
export const Book = (props) => {
	return <MaterialIcons name='library-books' {...props}/>
}
export const Question = (props) => {
	return <MaterialIcons name='question-answer' {...props}/>
}
export const Right = (props) => {
	return <MaterialIcons name='check' {...props}/>
}
export const Warning = (props) => {
	return <MaterialIcons name='warning' {...props}/>
}
export const Wrong = (props) => {
	return <FontAwesome name='close' {...props}/>
}