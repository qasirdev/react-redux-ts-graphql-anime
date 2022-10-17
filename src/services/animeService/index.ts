import { apolloClient } from '../../app/graphql';
import { FETCH_ANIME_LIST } from './queries';
import { FetchAnimeList } from './__generated__/FetchAnimeList';

class AnimeService {
  async fetchAnimeList(
    page: Number,
    perPage = 12
  ): Promise<FetchAnimeList['Page']> {
    try {
      const response = await apolloClient.query({
        query: FETCH_ANIME_LIST,
        variables: { page, perPage },
      });
      if (!response || !response.data) {
        throw new Error('Something went wron');
      }
      return response.data.Page;
    } catch (error) {
      throw error;
    }
  }
}

export default new AnimeService();
