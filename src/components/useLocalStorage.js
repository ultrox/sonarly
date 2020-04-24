function set(item, id = 'movies') {
  return localStorage.setItem(id, JSON.stringify(item))
}

function get(id = 'movies') {
  return JSON.parse(localStorage.getItem(id))
}

export {set, get}
