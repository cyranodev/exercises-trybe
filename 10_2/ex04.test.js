const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Function getRepos - promises', () => {
  it('should return a list that contains certain names', async () => {
    const url = 'https://api.github.com/users/tryber/repos';
    const list = await getRepos(url);
    expect(list).toContain('sd-01-week4-5-project-todo-list');
    expect(list).toContain('sd-01-week4-5-project-meme-generator');
  });
});