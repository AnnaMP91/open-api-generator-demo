/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EncounterCondition } from '../models/EncounterCondition';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EncounterConditionService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static encounterConditionList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of encounter conditions.
         */
        count?: number;
        /**
         * URL to retrieve the next page of encounter conditions.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of encounter conditions.
         */
        previous?: string | null;
        results?: Array<EncounterCondition>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-condition/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EncounterCondition Successful response
     * @throws ApiError
     */
    public static encounterConditionRead(
        id: number,
    ): CancelablePromise<EncounterCondition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-condition/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
