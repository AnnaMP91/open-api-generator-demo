/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokemonColor } from '../models/PokemonColor';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonColorService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonColorList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemon colors.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemon colors.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemon colors.
         */
        previous?: string | null;
        results?: Array<PokemonColor>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-color/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokemonColor Successful response
     * @throws ApiError
     */
    public static pokemonColorRead(
        id: number,
    ): CancelablePromise<PokemonColor> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-color/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
