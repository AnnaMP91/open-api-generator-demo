/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrowthRate } from '../models/GrowthRate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GrowthRateService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static growthRateList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of growth rates.
         */
        count?: number;
        /**
         * URL to retrieve the next page of growth rates.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of growth rates.
         */
        previous?: string | null;
        results?: Array<GrowthRate>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/growth-rate/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns GrowthRate Successful response
     * @throws ApiError
     */
    public static growthRateRead(
        id: number,
    ): CancelablePromise<GrowthRate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/growth-rate/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
