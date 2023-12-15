/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokemonSpecies } from '../models/PokemonSpecies';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonSpeciesService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonSpeciesList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemon species list.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemon species list.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemon species list.
         */
        previous?: string | null;
        results?: Array<PokemonSpecies>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-species/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokemonSpecies Successful response
     * @throws ApiError
     */
    public static pokemonSpeciesRead(
        id: number,
    ): CancelablePromise<PokemonSpecies> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-species/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
