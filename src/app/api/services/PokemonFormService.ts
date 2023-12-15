/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokemonForm } from '../models/PokemonForm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokemonFormService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokemonFormList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokemon forms.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokemon forms.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokemon forms.
         */
        previous?: string | null;
        results?: Array<PokemonForm>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-form/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokemonForm Successful response
     * @throws ApiError
     */
    public static pokemonFormRead(
        id: number,
    ): CancelablePromise<PokemonForm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokemon-form/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
