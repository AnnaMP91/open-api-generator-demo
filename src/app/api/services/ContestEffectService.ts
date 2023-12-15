/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContestEffect } from '../models/ContestEffect';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContestEffectService {

    /**
     * @param limit
     * @param offset
     * @returns any A list of contest effects
     * @throws ApiError
     */
    public static contestEffectList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of contest effects
         */
        count?: number;
        /**
         * The URL to get the next page of contest effects (if it exists)
         */
        next?: string | null;
        /**
         * The URL to get the previous page of contest effects (if it exists)
         */
        previous?: string | null;
        results?: Array<ContestEffect>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/contest-effect/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ContestEffect Successful response
     * @throws ApiError
     */
    public static contestEffectRead(
        id: number,
    ): CancelablePromise<ContestEffect> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/contest-effect/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
