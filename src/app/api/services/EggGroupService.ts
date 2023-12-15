/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EggGroup } from '../models/EggGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EggGroupService {

    /**
     * @param limit
     * @param offset
     * @returns EggGroup OK
     * @throws ApiError
     */
    public static eggGroupList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<EggGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/egg-group/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EggGroup Successful response
     * @throws ApiError
     */
    public static eggGroupRead(
        id: number,
    ): CancelablePromise<EggGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/egg-group/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
