import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {GetcharacterGQL, GetEpGQL} from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private readonly apollo: Apollo, private readonly getepisode: GetEpGQL, private readonly getcharacterQuery: GetcharacterGQL) {

  }

  searchCharacters(characterName: string) {
    return this.getcharacterQuery.watch({characterName}).valueChanges;
  }

  getEpisodes() {
    return this.getepisode
      .watch()
      .valueChanges
      .pipe(map(source => source.data.episodes.results));
  }
}
