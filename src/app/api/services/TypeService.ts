/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Type } from '../models/Type';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TypeService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static typeList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of types.
         */
        count?: number;
        /**
         * URL to retrieve the next page of types.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of types.
         */
        previous?: string | null;
        results?: Array<Type>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/type/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Type Successful response
     * @throws ApiError
     */
    public static typeRead(
        id: number,
    ): CancelablePromise<Type> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/type/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
