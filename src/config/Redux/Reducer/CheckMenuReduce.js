var CheckMenu = true;
const CheckMenuReducer = (state = CheckMenu, action) => {
	if (action.type === 'setCheckMenu') return !state;
	return state;
};
export default CheckMenuReducer;
