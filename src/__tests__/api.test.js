import {movieSearch, API_ERR_MSG} from '../api'
import movies from '../fixtures/movieData.js'
const {REACT_APP_MOVIE_DB_KEY, REACT_APP_MOVIE_DB_BASE_API} = process.env

function mockFetch(data, options = {ok: true, status: 200}) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: options.ok,
      status: options.status,
      json: () => data,
    }),
  )
}

test('moveSearch(): calls fetch with query & returns arr of movies', async function() {
  fetch = mockFetch(movies, {ok: true, status: 200}) // or window.fetch
  let result = await movieSearch('batman')
  expect(fetch).toHaveBeenCalledTimes(1)
  expect(result).toEqual(movies)
})

test('moveSearch(): calls fetch with non existant query & returns empty arr', async function() {
  let empty = {page: 1, results: [], total_pages: 0, total_results: 0}
  fetch = mockFetch(empty, {ok: true, status: 200}) // or window.fetch
  let result = await movieSearch('movie whe dont have here')

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(result).toEqual(empty)
})

test('moveSearch(): calls fetch to not existing path 404', async function() {
  const status = 404
  const emptyResponseOnPurpuse = {}
  fetch = mockFetch(emptyResponseOnPurpuse, {ok: false, status})
  expect.assertions(1)

  return movieSearch('batman')
    .then(d => console.log('just for show, should be idle'))
    .catch(err => expect(err.message).toBe(API_ERR_MSG.status[status]))
})

it('moveSearch(): api key is miconfigured 401', function() {
  const status = 401

  const response = {
    status_code: 7,
    status_message: 'Invalid API key: You must be granted a valid key.',
    success: false,
  }

  fetch = mockFetch(response, {ok: false, status})
  expect.assertions(1)

  return movieSearch('batman')
    .then(d => console.log('just for show, should be idle'))
    .catch(err => expect(err.message).toBe(API_ERR_MSG.status[status]))
})

it('moveSearch(): 500 code', function() {
  const status = 500

  const response = {}

  fetch = mockFetch(response, {ok: false, status})
  expect.assertions(1)

  return movieSearch('batman')
    .then(d => console.log('just for show, should be idle'))
    .catch(err => expect(err.message).toBe(API_ERR_MSG.general))
})
