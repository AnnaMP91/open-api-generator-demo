/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gender } from '../models/Gender';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenderService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static genderList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of genders.
         */
        count?: number;
        /**
         * URL to retrieve the next page of genders.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of genders.
         */
        previous?: string | null;
        results?: Array<Gender>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/gender/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Gender Successful response
     * @throws ApiError
     */
    public static genderRead(
        id: number,
    ): CancelablePromise<Gender> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/gender/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
