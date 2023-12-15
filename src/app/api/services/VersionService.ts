/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Version } from '../models/Version';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VersionService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static versionList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of versions.
         */
        count?: number;
        /**
         * URL to retrieve the next page of versions.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of versions.
         */
        previous?: string | null;
        results?: Array<Version>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/version/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Version Successful response
     * @throws ApiError
     */
    public static versionRead(
        id: number,
    ): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/version/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
