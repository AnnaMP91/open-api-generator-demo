/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationArea } from '../models/LocationArea';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LocationAreaService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static locationAreaList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of location areas.
         */
        count?: number;
        /**
         * URL to retrieve the next page of location areas.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of location areas.
         */
        previous?: string | null;
        results?: Array<LocationArea>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/location-area/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns LocationArea Successful response
     * @throws ApiError
     */
    public static locationAreaRead(
        id: number,
    ): CancelablePromise<LocationArea> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/location-area/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
