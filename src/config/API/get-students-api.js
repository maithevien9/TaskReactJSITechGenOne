const getStudents = async () => {
	const { REACT_APP_URL } = process.env;
	var url = `http://${REACT_APP_URL}:8080/api/students`;
	return await fetch(url)
	.then(checkStatus)
	.then((response) => response.json());
};

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(`HTTP Error ${response.statusText}`);
	error.status = response.statusText;
	error.response = response;
	console.log(error); // eslint-disable-line no-console
	throw error;
}

export default getStudents;
