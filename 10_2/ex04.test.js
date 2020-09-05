const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Function getRepos -', () => {
  it('should return a list that contains certain names', async () => {
    const url = 'https://api.github.com/users/tryber/repos';
    const list = await getRepos(url);
    expect(list).toContain('hacka-trybe');
    expect(list).toContain('sd-00-block5-project-pixels-art');
  });
});