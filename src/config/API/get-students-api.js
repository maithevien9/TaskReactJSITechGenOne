const getStudents = async () => {
	var url = `http://localhost:8080/api/students`;
	return await fetch(url).then((response) => response.json());
};
export default getStudents;
