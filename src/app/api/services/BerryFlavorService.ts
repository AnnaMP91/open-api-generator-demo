/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BerryFlavor } from '../models/BerryFlavor';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BerryFlavorService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static berryFlavorList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of berry flavors
         */
        count?: number;
        /**
         * The URL to the next page of berry flavors (if any)
         */
        next?: string;
        /**
         * The URL to the previous page of berry flavors (if any)
         */
        previous?: string;
        results?: Array<BerryFlavor>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry-flavor/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns BerryFlavor Successful response
     * @throws ApiError
     */
    public static berryFlavorRead(
        id: number,
    ): CancelablePromise<BerryFlavor> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry-flavor/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
