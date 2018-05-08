import fetch from 'isomorphic-fetch';

function search(query) {
  return fetch(`api/zone?street_name=${query}`, {
    method: 'GET',
    accept: 'application/json',
  }).then(checkStatus) //.then(results => results.json())
    .then(parseJSON)  //.then(results => console.log(results))
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
