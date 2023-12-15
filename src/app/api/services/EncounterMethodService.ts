/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EncounterMethod } from '../models/EncounterMethod';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EncounterMethodService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static encounterMethodList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of encounter methods.
         */
        count?: number;
        /**
         * URL to retrieve the next page of encounter methods.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of encounter methods.
         */
        previous?: string | null;
        results?: Array<EncounterMethod>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-method/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EncounterMethod Successful response
     * @throws ApiError
     */
    public static encounterMethodRead(
        id: number,
    ): CancelablePromise<EncounterMethod> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-method/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
