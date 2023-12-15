/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pokedex } from '../models/Pokedex';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokedexService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokedexList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokedexes.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokedexes.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokedexes.
         */
        previous?: string | null;
        results?: Array<Pokedex>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokedex/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Pokedex Successful response
     * @throws ApiError
     */
    public static pokedexRead(
        id: number,
    ): CancelablePromise<Pokedex> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokedex/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
