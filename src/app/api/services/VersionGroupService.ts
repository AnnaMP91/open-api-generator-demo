/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionGroup } from '../models/VersionGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VersionGroupService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static versionGroupList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of version groups.
         */
        count?: number;
        /**
         * URL to retrieve the next page of version groups.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of version groups.
         */
        previous?: string | null;
        results?: Array<VersionGroup>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/version-group/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns VersionGroup Successful response
     * @throws ApiError
     */
    public static versionGroupRead(
        id: number,
    ): CancelablePromise<VersionGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/version-group/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
