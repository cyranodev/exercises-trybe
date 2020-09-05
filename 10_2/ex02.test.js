const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Function getUserName tested - promise', () => {
  it('should find user and return their name', () => {
    expect.assertions(1);
    return getUserName(4).then(name => expect(name).toEqual('Mark'));
  });

  it('should return error when user is not found', () => {
    expect.assertions(1);
    return getUserName(0).catch(error => expect(error).toEqual({ error: 'User with 0 not found.' }));
  });
});
