/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Machine } from '../models/Machine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachineService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static machineList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of machines.
         */
        count?: number;
        /**
         * URL to retrieve the next page of machines.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of machines.
         */
        previous?: string | null;
        results?: Array<Machine>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/machine/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Machine Successful response
     * @throws ApiError
     */
    public static machineRead(
        id: number,
    ): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/machine/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
