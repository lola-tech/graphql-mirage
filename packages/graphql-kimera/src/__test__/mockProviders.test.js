const { times } = require('lodash');
const update = require('immutability-helper');

const {
  mergeScenarios,
  mergeBuilders,
  reduceToScenario,
  mockResolver,
} = require('../mockProviders');

describe('mergeScenarios', () => {
  const defaults = {
    me: {
      userName: 'ciobi', // String
      children: [{}, { name: 'Andreea' }, {}], // [Child]
      trips: times(10, () => ({
        rockets: [{ name: 'Falcon 9' }, { name: 'Falcon Heavy' }],
      })), // [Launches -> { ..., rockets: [Rocket] }]
    },
    countries: times(10, () => ({})),
  };

  const customData = {
    me: {
      userName: 'c10b10',
      children: [{}],
    },
    countries: times(5, () => ({
      states: times(2, () => ({
        name: 'Arizona',
      })),
    })),
  };

  it('merges defaults correctly', () => {
    const actual = mergeScenarios(defaults, customData);
    expect(actual.me.userName).toEqual(customData.me.userName);
    expect(actual.me.children).toHaveLength(customData.me.children.length);
    expect(actual.me.trips).toHaveLength(defaults.me.trips.length);
    expect(actual.countries).toHaveLength(5);
    expect(actual.countries[0].states).toHaveLength(2);
    expect(actual.countries[0].states[0].name).toBe('Arizona');
  });

  it('gets memoized by using the customData object shape', () => {
    const expected = mergeScenarios(
      defaults,
      update(customData, {
        me: { children: { $set: [{}] } },
      })
    );
    const actual = mergeScenarios(defaults, customData);

    expect(actual).toBe(expected);
  });

  it('handle nulls', () => {
    const actual = mergeScenarios(null, { me: { userName: 'c10b10' } });

    expect(actual.me.userName).toBe('c10b10');
  });

  it('handle scenario with value of _0_', () => {
    const actual = mergeScenarios(undefined, 0);

    expect(actual).toBe(0);
  });

  it('handle scenario with value of _false_', () => {
    const actual = mergeScenarios(undefined, false);

    expect(actual).toBe(false);
  });

  it('handle scenario with value of _""_', () => {
    const actual = mergeScenarios(undefined, '');

    expect(actual).toBe('');
  });
});

describe('mergeBuilders', () => {
  const defaults = {
    city: 'Cluj-Napoca',
    address: 'Eroilor Street',
    description: 'Lorem ipsum',
  };

  const customData = {
    address: 'Unirii Square',
    test: true,
  };

  it('getBuilders: merges the custom data correctly', () => {
    const actual = mergeBuilders(defaults, customData);

    expect(actual.city).toEqual(defaults.city);
    expect(actual.address).toEqual(customData.address);
    expect(actual.description).toEqual(defaults.description);
    expect(actual.test).toBe(true);
  });

  it('gets memoized by using the customData object shape', () => {
    const expected = mergeBuilders(defaults, { ...customData });
    const actual = mergeBuilders(defaults, customData);

    // Should have identical references if memoization worked
    expect(actual).toBe(expected);
  });
});

const testReduceToScenario = (meta, mockProviders) => {
  return reduceToScenario(mockProviders, meta);
};

describe('reduceToScenario', () => {
  it('Reducing scenario for Object Types is works if no resolvers', () => {
    expect(
      testReduceToScenario(
        {
          name: 'me',
          type: 'User',
          isArray: false,
        },
        {
          scenario: {
            name: 'Jim',
            trips: [{ rockets: [{}, {}] }, { mission: 'Unobtainium' }, {}],
          },
          builders: {
            User: () => ({
              emailAddress: 'type@example.com',
              trips: [{ isBooked: false }],
              allergies: ['Aspirin'],
              address: {
                city: 'New York City',
              },
              profileImage: 'http://example.com/profile.png',
            }),
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual({
      name: 'Jim',
      emailAddress: 'type@example.com',
      profileImage: 'http://example.com/profile.png',
      trips: [{ rockets: [{}, {}] }, { mission: 'Unobtainium' }, {}],
      allergies: ['Aspirin'],
      address: {
        city: 'New York City',
      },
    });
    // ^ For Object Type Builders, we expect the scenario to be composed
    // by aggregating fields mockers from other builders
  });

  it('Scenarios for List Object Types are reduced correctly', () => {
    expect(
      testReduceToScenario(
        {
          name: 'trips',
          type: 'Launch',
          isArray: true,
        },
        {
          scenario: [{ rockets: [{}, {}] }, { mission: 'Unobtainium' }, {}],
          builders: {
            Launch: () => ({
              site: 'Kennedy Space Station',
              mission: 'Stargazing',
              rockets: [{}],
            }),
            LaunchDestination: () => ({ name: 'Mars' }),
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual([
      {
        mission: 'Stargazing',
        rockets: [{}, {}],
        site: 'Kennedy Space Station',
      },
      { mission: 'Unobtainium', rockets: [{}], site: 'Kennedy Space Station' },
      { mission: 'Stargazing', rockets: [{}], site: 'Kennedy Space Station' },
    ]);
    // ^ For arrays of Object Type builders we epect
  });

  it('`null` scenarios will reduce to `null`', () => {
    expect(
      testReduceToScenario(
        {
          name: 'emailAddress',
          type: 'String',
          isArray: false,
        },
        {
          scenario: null,
          builders: {
            User: () => ({
              emailAddress: 'type@example.com',
            }),
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual(null);
  });

  it('`undefined` scenarios will reduce from a Builder', () => {
    expect(
      testReduceToScenario(
        {
          name: 'emailAddress',
          type: 'String',
          isArray: false,
        },
        {
          scenario: undefined,
          builders: {
            User: () => ({
              emailAddress: 'type@example.com',
            }),
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual('Mocked String');
  });

  it('`undefined` scenarios will reduce to `undefined` if no Builder exists', () => {
    expect(
      testReduceToScenario(
        {
          name: 'emailAddress',
          type: 'String',
          isArray: false,
        },
        {
          scenario: undefined,
          builders: {
            User: () => ({
              emailAddress: 'type@example.com',
            }),
          },
        }
      )
    ).toEqual(undefined);
  });

  it('Array scenarios are reduced correctly.', () => {
    expect(
      testReduceToScenario(
        {
          name: 'allergies',
          type: 'String',
          isArray: true,
        },
        {
          scenario: ['Aspirin'],
          builders: {
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual(['Aspirin']);
  });

  it('Reducing allows scenarios in Builders.', () => {
    expect(
      testReduceToScenario(
        {
          name: 'me',
          type: 'User',
          isArray: false,
        },
        {
          scenario: {
            emailAddress: { test: 'email@example.com' },
          },
          builders: {
            User: () => ({
              emailAddress: mockResolver(() => () => 'resolver@example.com'),
              trips: [{ isBooked: false }],
            }),
            String: () => 'Mocked String',
          },
        }
      )
    ).toEqual({
      emailAddress: { test: 'email@example.com' },
      trips: [{ isBooked: false }],
    });
  });
});
