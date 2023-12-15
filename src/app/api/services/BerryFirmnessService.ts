/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BerryFirmness } from '../models/BerryFirmness';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BerryFirmnessService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static berryFirmnessList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of berry firmnesses available from this API.
         */
        count?: number;
        /**
         * The URL for the next page of results, or null if there are no more results.
         */
        next?: string | null;
        /**
         * The URL for the previous page of results, or null if this is the first page.
         */
        previous?: string | null;
        results?: Array<BerryFirmness>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry-firmness/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns BerryFirmness Successful response
     * @throws ApiError
     */
    public static berryFirmnessRead(
        id: number,
    ): CancelablePromise<BerryFirmness> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry-firmness/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
