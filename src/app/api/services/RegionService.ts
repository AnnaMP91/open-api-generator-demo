/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Region } from '../models/Region';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RegionService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static regionList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of regions.
         */
        count?: number;
        /**
         * URL to retrieve the next page of regions.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of regions.
         */
        previous?: string | null;
        results?: Array<Region>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/region/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Region Successful response
     * @throws ApiError
     */
    public static regionRead(
        id: number,
    ): CancelablePromise<Region> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/region/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
