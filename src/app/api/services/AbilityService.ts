/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Ability } from '../models/Ability';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AbilityService {

    /**
     * @param limit
     * @param offset
     * @returns any A list of abilities
     * @throws ApiError
     */
    public static abilityList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of abilities available
         */
        count?: number;
        /**
         * The URL for the next page of abilities (null if none)
         */
        next?: string;
        /**
         * The URL for the previous page of abilities (null if none)
         */
        previous?: string;
        results?: Array<Ability>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ability/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Ability Successful response
     * @throws ApiError
     */
    public static abilityRead(
        id: number,
    ): CancelablePromise<Ability> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ability/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
