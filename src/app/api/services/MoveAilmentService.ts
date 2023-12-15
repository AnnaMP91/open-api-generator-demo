/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveAilment } from '../models/MoveAilment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MoveAilmentService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static moveAilmentList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of move ailments.
         */
        count?: number;
        /**
         * URL to retrieve the next page of move ailments.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of move ailments.
         */
        previous?: string | null;
        results?: Array<MoveAilment>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-ailment/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns MoveAilment Successful response
     * @throws ApiError
     */
    public static moveAilmentRead(
        id: number,
    ): CancelablePromise<MoveAilment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/move-ailment/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
