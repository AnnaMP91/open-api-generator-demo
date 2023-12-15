/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvolutionChain } from '../models/EvolutionChain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EvolutionChainService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static evolutionChainList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of evolution chains.
         */
        count?: number;
        /**
         * URL to retrieve the next page of evolution chains.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of evolution chains.
         */
        previous?: string | null;
        results?: Array<EvolutionChain>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/evolution-chain/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EvolutionChain Successful response
     * @throws ApiError
     */
    public static evolutionChainRead(
        id: number,
    ): CancelablePromise<EvolutionChain> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/evolution-chain/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
