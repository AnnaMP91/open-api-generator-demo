/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveDamageClass } from '../models/MoveDamageClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveDamageClassService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveDamageClassList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move damage classes.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move damage classes.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move damage classes.
         */
        previous?: string | null;
        results?: Array<MoveDamageClass>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-damage-class/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveDamageClass Successful response
     * @throws ApiError
     */
    public static moveDamageClassRead(
        id: number,
    ): CancelablePromise<MoveDamageClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-damage-class/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
