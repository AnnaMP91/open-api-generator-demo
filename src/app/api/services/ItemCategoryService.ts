/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemCategory } from '../models/ItemCategory';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemCategoryService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static itemCategoryList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of item categories.
         */
        count?: number;
        /**
         * URL to retrieve the next page of item categories.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of item categories.
         */
        previous?: string | null;
        results?: Array<ItemCategory>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-category/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ItemCategory Successful response
     * @throws ApiError
     */
    public static itemCategoryRead(
        id: number,
    ): CancelablePromise<ItemCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-category/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
