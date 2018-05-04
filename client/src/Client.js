function search(query) {
  return fetch(`api/zone?street_name=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

const Client = { search };
export default Client;
