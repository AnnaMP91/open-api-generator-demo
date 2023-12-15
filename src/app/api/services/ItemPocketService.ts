/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemPocket } from '../models/ItemPocket';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemPocketService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static itemPocketList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of item pockets.
         */
        count?: number;
        /**
         * URL to retrieve the next page of item pockets.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of item pockets.
         */
        previous?: string | null;
        results?: Array<ItemPocket>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-pocket/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ItemPocket Successful response
     * @throws ApiError
     */
    public static itemPocketRead(
        id: number,
    ): CancelablePromise<ItemPocket> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-pocket/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
