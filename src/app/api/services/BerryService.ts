/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Berry } from '../models/Berry';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BerryService {

    /**
     * @param limit
     * @param offset
     * @returns Berry OK
     * @throws ApiError
     */
    public static berryList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<Berry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Berry Successful response
     * @throws ApiError
     */
    public static berryRead(
        id: number,
    ): CancelablePromise<Berry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/berry/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
