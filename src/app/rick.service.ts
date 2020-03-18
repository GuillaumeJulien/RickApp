import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private readonly apollo: Apollo) {

  }

  searchCharacters(characterName: string) {
    const getCharacter = gql`query getcharacter{
      characters (filter:{name : "${characterName}"}){
        results{
          name
          image
        }
      }
    }`;
    return this.apollo.watchQuery<any>({query: getCharacter})
      .valueChanges
      .pipe(map(result => result.data.characters.results));
  }

  getEpisodes() {
    const getCharacter = gql`query getEp{
      episodes {
        results {
          name
          characters {
            name
            image
          }
        }
      }
    }`;
    return this.apollo.watchQuery<any>({query: getCharacter})
      .valueChanges
      .pipe(map(result => result.data.episodes.results));
  }
}
