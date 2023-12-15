/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Characteristic } from '../models/Characteristic';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CharacteristicService {

    /**
     * @param limit
     * @param offset
     * @returns Characteristic Successful response with a list of characteristics
     * @throws ApiError
     */
    public static characteristicList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<Characteristic>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/characteristic/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Characteristic Successful response
     * @throws ApiError
     */
    public static characteristicRead(
        id: number,
    ): CancelablePromise<Characteristic> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/characteristic/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
