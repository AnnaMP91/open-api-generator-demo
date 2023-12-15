/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContestType } from '../models/ContestType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContestTypeService {

    /**
     * @param limit
     * @param offset
     * @returns any Successful response containing a list of contest types
     * @throws ApiError
     */
    public static contestTypeList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of contest types returned
         */
        count?: number;
        /**
         * URL to the next page of contest types, if any
         */
        next?: string | null;
        /**
         * URL to the previous page of contest types, if any
         */
        previous?: string | null;
        results?: Array<ContestType>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/contest-type/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns ContestType Successful response
     * @throws ApiError
     */
    public static contestTypeRead(
        id: number,
    ): CancelablePromise<ContestType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/contest-type/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
