/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveBattleStyle } from '../models/MoveBattleStyle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveBattleStyleService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveBattleStyleList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move battle styles.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move battle styles.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move battle styles.
         */
        previous?: string | null;
        results?: Array<MoveBattleStyle>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-battle-style/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveBattleStyle Successful response
     * @throws ApiError
     */
    public static moveBattleStyleRead(
        id: number,
    ): CancelablePromise<MoveBattleStyle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-battle-style/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
