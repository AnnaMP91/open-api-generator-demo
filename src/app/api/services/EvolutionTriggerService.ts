/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvolutionTrigger } from '../models/EvolutionTrigger';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EvolutionTriggerService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static evolutionTriggerList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of evolution triggers.
         */
        count?: number;
        /**
         * URL to retrieve the next page of evolution triggers.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of evolution triggers.
         */
        previous?: string | null;
        results?: Array<EvolutionTrigger>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/evolution-trigger/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EvolutionTrigger Successful response
     * @throws ApiError
     */
    public static evolutionTriggerRead(
        id: number,
    ): CancelablePromise<EvolutionTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/evolution-trigger/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
