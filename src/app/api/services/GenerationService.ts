/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Generation } from '../models/Generation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenerationService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static generationList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of generations.
         */
        count?: number;
        /**
         * URL to retrieve the next page of generations.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of generations.
         */
        previous?: string | null;
        results?: Array<Generation>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/generation/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Generation Successful response
     * @throws ApiError
     */
    public static generationRead(
        id: number,
    ): CancelablePromise<Generation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/generation/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
