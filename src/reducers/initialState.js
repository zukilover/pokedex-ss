/**
 * Created by herisetiawan on 2/16/17.
 */
export default {
  pokemons: [],
  details: [],
  detail: {},
  spec: {
    isFetching: false
  },
  loadParams: {
    hasMore: true,
    next: null
  },
  filter: {
    text: null,
    list: []
  }
}
