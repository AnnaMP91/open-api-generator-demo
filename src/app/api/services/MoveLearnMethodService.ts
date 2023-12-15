/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveLearnMethod } from '../models/MoveLearnMethod';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveLearnMethodService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveLearnMethodList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move learn methods.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move learn methods.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move learn methods.
         */
        previous?: string | null;
        results?: Array<MoveLearnMethod>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-learn-method/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveLearnMethod Successful response
     * @throws ApiError
     */
    public static moveLearnMethodRead(
        id: number,
    ): CancelablePromise<MoveLearnMethod> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-learn-method/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
