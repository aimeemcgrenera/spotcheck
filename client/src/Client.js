function search(query) {
  return fetch(`api/zone?street_name=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
