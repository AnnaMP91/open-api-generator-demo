/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PokeathlonStat } from '../models/PokeathlonStat';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PokeathlonStatService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static pokeathlonStatList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pokeathlon stats.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pokeathlon stats.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pokeathlon stat.
         */
        previous?: string | null;
        results?: Array<PokeathlonStat>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokeathlon-stat/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PokeathlonStat Successful response
     * @throws ApiError
     */
    public static pokeathlonStatRead(
        id: number,
    ): CancelablePromise<PokeathlonStat> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pokeathlon-stat/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
