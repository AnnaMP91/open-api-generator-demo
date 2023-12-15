/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemFlingEffect } from '../models/ItemFlingEffect';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemFlingEffectService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static itemFlingEffectList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of item fling effects.
         */
        count?: number;
        /**
         * URL to retrieve the next page of item fling effects.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of item fling effects.
         */
        previous?: string | null;
        results?: Array<ItemFlingEffect>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-fling-effect/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ItemFlingEffect Successful response
     * @throws ApiError
     */
    public static itemFlingEffectRead(
        id: number,
    ): CancelablePromise<ItemFlingEffect> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-fling-effect/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
