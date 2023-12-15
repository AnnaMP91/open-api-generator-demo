/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokemonHabitat } from '../models/PokemonHabitat';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonHabitatService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonHabitatList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemon habitats.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemon habitats.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemon habitats.
         */
        previous?: string | null;
        results?: Array<PokemonHabitat>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-habitat/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokemonHabitat Successful response
     * @throws ApiError
     */
    public static pokemonHabitatRead(
        id: number,
    ): CancelablePromise<PokemonHabitat> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-habitat/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
