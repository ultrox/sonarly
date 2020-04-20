const {REACT_APP_MOVIE_DB_KEY, REACT_APP_MOVIE_DB_BASE_API} = process.env

export function movieSearch(query, page = 1) {
  const options = {path: '/search/movie', page}
  return theMovieDb(encodeURIComponent(query), options)
}

function theMovieDb(query, options) {
  if (
    REACT_APP_MOVIE_DB_BASE_API === undefined ||
    REACT_APP_MOVIE_DB_KEY === undefined
  ) {
    throw new Error(API_ERR_MSG.env)
  }

  const {path, page} = options
  const optionsQuery = `&language=en-US&query=${query}&include_adult=false&page=${page}`
  return fetch(
    `${REACT_APP_MOVIE_DB_BASE_API}${path}?api_key=${REACT_APP_MOVIE_DB_KEY}${optionsQuery}`,
  ).then(response => {
    if (!response.ok) {
      let msg = API_ERR_MSG.status[response.status] || API_ERR_MSG.general
      return Promise.reject(new Error(msg))
    }
    return response.json()
  })
}

export var API_ERR_MSG = {
  status: {
    '422': 'You need to specify movie',
    '401':
      "You don't have access to do this, (probably api key is troublesome)",
    '404': 'Movie you requested could not be found',
  },
  env: '.env variable misconfiguration detected',
  general: 'Currently we have some problems, please try again later.',
}
