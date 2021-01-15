const getMovies = async () => {
	var url = `https://reactnative.dev/movies.json`;
	return await fetch(url).then((response) => response.json());
};
export default getMovies;
