/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Move } from '../models/Move';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of moves.
         */
        count?: number;
        /**
         * URL to retrieve the next page of moves.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of moves.
         */
        previous?: string | null;
        results?: Array<Move>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Move Successful response
     * @throws ApiError
     */
    public static moveRead(
        id: number,
    ): CancelablePromise<Move> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
