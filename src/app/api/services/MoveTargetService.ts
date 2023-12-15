/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveTarget } from '../models/MoveTarget';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveTargetService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveTargetList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move targets.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move targets.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move targets.
         */
        previous?: string | null;
        results?: Array<MoveTarget>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-target/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveTarget Successful response
     * @throws ApiError
     */
    public static moveTargetRead(
        id: number,
    ): CancelablePromise<MoveTarget> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-target/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
