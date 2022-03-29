const fetch = require('node-fetch');

const getPeople = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data =  await getRequest.json();
  return {
    count: data.count,
    results: data.results
  };
}
getPeople(fetch);

module.exports ={ getPeople};