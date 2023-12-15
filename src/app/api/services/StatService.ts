/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stat } from '../models/Stat';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static statList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of stats.
         */
        count?: number;
        /**
         * URL to retrieve the next page of stats.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of stats.
         */
        previous?: string | null;
        results?: Array<Stat>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stat/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Stat Successful response
     * @throws ApiError
     */
    public static statRead(
        id: number,
    ): CancelablePromise<Stat> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stat/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
