var arrStudents = [];
const StudentReducer = (state = arrStudents, action) => {
	if (action.type === 'setStudent') return action.data;
	return state;
};
export default StudentReducer;
