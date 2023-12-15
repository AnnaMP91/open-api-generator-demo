/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from '../models/Item';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static itemList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of items.
         */
        count?: number;
        /**
         * URL to retrieve the next page of items.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of items.
         */
        previous?: string | null;
        results?: Array<Item>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Item Successful response
     * @throws ApiError
     */
    public static itemRead(
        id: number,
    ): CancelablePromise<Item> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
