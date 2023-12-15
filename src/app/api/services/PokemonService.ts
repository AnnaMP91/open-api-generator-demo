/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pokemon } from '../models/Pokemon';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemons.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemons.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemons.
         */
        previous?: string | null;
        results?: Array<Pokemon>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Pokemon Successful response
     * @throws ApiError
     */
    public static pokemonRead(
        id: number,
    ): CancelablePromise<Pokemon> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
