/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Nature } from '../models/Nature';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NatureService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static natureList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of natures.
         */
        count?: number;
        /**
         * URL to retrieve the next page of natures.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of natures.
         */
        previous?: string | null;
        results?: Array<Nature>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/nature/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Nature Successful response
     * @throws ApiError
     */
    public static natureRead(
        id: number,
    ): CancelablePromise<Nature> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/nature/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
