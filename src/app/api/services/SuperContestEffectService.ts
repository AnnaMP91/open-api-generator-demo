/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuperContestEffect } from '../models/SuperContestEffect';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SuperContestEffectService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static superContestEffectList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of super contest effects.
         */
        count?: number;
        /**
         * URL to retrieve the next page of super contest effects.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of super contest effects.
         */
        previous?: string | null;
        results?: Array<SuperContestEffect>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/super-contest-effect/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns SuperContestEffect Successful response
     * @throws ApiError
     */
    public static superContestEffectRead(
        id: number,
    ): CancelablePromise<SuperContestEffect> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/super-contest-effect/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
