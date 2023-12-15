/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokemonShape } from '../models/PokemonShape';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonShapeService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonShapeList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemon shapes.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemon shapes.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemon shapes.
         */
        previous?: string | null;
        results?: Array<PokemonShape>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-shape/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokemonShape Successful response
     * @throws ApiError
     */
    public static pokemonShapeRead(
        id: number,
    ): CancelablePromise<PokemonShape> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-shape/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
