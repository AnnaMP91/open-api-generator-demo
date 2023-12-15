/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveCategory } from '../models/MoveCategory';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveCategoryService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveCategoryList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move categories.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move categories.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move categories.
         */
        previous?: string | null;
        results?: Array<MoveCategory>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-category/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveCategory Successful response
     * @throws ApiError
     */
    public static moveCategoryRead(
        id: number,
    ): CancelablePromise<MoveCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-category/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
