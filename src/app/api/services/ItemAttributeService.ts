/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemAttribute } from '../models/ItemAttribute';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ItemAttributeService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static itemAttributeList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of item attributes.
         */
        count?: number;
        /**
         * URL to retrieve the next page of item attributes.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of item attributes.
         */
        previous?: string | null;
        results?: Array<ItemAttribute>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-attribute/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ItemAttribute Successful response
     * @throws ApiError
     */
    public static itemAttributeRead(
        id: number,
    ): CancelablePromise<ItemAttribute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/item-attribute/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
