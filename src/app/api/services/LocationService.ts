/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from '../models/Location';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LocationService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static locationList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of locations.
         */
        count?: number;
        /**
         * URL to retrieve the next page of locations.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of locations.
         */
        previous?: string | null;
        results?: Array<Location>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/location/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Location Successful response
     * @throws ApiError
     */
    public static locationRead(
        id: number,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/location/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
