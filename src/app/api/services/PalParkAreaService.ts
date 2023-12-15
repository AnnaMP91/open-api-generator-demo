/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PalParkArea } from '../models/PalParkArea';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PalParkAreaService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static palParkAreaList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of pal park areas.
         */
        count?: number;
        /**
         * URL to retrieve the next page of pal park areas.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of pal park areas.
         */
        previous?: string | null;
        results?: Array<PalParkArea>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pal-park-area/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns PalParkArea Successful response
     * @throws ApiError
     */
    public static palParkAreaRead(
        id: number,
    ): CancelablePromise<PalParkArea> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/pal-park-area/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
