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
  it('should find user and return their name', async () => {
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
  });

  it('should return error when user is not found', () => {
    try {
      const name = getUserName(0);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 0 not found.' });
    }
  });
});
