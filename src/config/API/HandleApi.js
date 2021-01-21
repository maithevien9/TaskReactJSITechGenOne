const { REACT_APP_API_ENDPOINT } = process.env;
const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

function APIGet(url) {
    url = REACT_APP_API_ENDPOINT + url;
    return fetch(url).then(checkStatus).then((response) => response.json());
}


function APIPost(url, params) {
    url = REACT_APP_API_ENDPOINT + url;
    return fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(params)
    })
        .then(checkStatus)
        .then((response) => response.json());
}

function APIPut(url, params) {
    url = REACT_APP_API_ENDPOINT + url;
    return fetch(url, {
        method: 'PUT',
        headers: header,
        body: JSON.stringify(params)
    })
        .then(checkStatus)
        .then((response) => response.json());
}

function APIDelete(url, id) {
    url = REACT_APP_API_ENDPOINT + url;
    return fetch(url + "/" + id, {
        method: 'DELETE',
        headers: header
    })
        .then(checkStatus)
        .then((response) => response.json());
}

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

const HandleApi = { APIGet, APIPost, APIPut, APIDelete };

export default HandleApi;
