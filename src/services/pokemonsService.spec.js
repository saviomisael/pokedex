import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { pokemonsMock } from '../mocks/pokemonsMock';
import { listPokemons } from './pokemonsService';

const handlers = [
  rest.get(
    'https://unpkg.com/pokemons@1.1.0/pokemons.json',
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ results: [...pokemonsMock] }));
    },
  ),
];

const server = setupServer(...handlers);

describe('pokemonsService', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should return pokemons list mapped', async () => {
    const result = await listPokemons();

    expect(result).toHaveLength(4);
  });
});
