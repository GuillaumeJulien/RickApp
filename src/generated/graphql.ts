import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type */
  Upload: any;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Character = {
   __typename?: 'Character';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  origin?: Maybe<Location>;
  location?: Maybe<Location>;
  image?: Maybe<Scalars['String']>;
  episode?: Maybe<Array<Maybe<Episode>>>;
  created?: Maybe<Scalars['String']>;
};

export type Characters = {
   __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
   __typename?: 'Episode';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  air_date?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
  characters?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars['String']>;
};

export type Episodes = {
   __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Info = {
   __typename?: 'Info';
  count?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
   __typename?: 'Location';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  residents?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars['String']>;
};

export type Locations = {
   __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
   __typename?: 'Query';
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
};


export type QueryCharacterArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type QueryLocationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};


export type QueryEpisodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type GetEpQueryVariables = {};


export type GetEpQuery = (
  { __typename?: 'Query' }
  & { episodes?: Maybe<(
    { __typename?: 'Episodes' }
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'name'>
      & { characters?: Maybe<Array<Maybe<(
        { __typename?: 'Character' }
        & Pick<Character, 'name' | 'image'>
      )>>> }
    )>>> }
  )> }
);

export type GetcharacterQueryVariables = {
  characterName?: Maybe<Scalars['String']>;
};


export type GetcharacterQuery = (
  { __typename?: 'Query' }
  & { characters?: Maybe<(
    { __typename?: 'Characters' }
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'name' | 'image'>
    )>>> }
  )> }
);

export const GetEpDocument = gql`
    query getEp {
  episodes {
    results {
      name
      characters {
        name
        image
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEpGQL extends Apollo.Query<GetEpQuery, GetEpQueryVariables> {
    document = GetEpDocument;
    
  }
export const GetcharacterDocument = gql`
    query getcharacter($characterName: String) {
  characters(filter: {name: $characterName}) {
    results {
      name
      image
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetcharacterGQL extends Apollo.Query<GetcharacterQuery, GetcharacterQueryVariables> {
    document = GetcharacterDocument;
    
  }