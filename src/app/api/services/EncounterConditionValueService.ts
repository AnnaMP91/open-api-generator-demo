/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EncounterConditionValue } from '../models/EncounterConditionValue';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EncounterConditionValueService {

    /**
     * @param limit
     * @param offset
     * @returns EncounterConditionValue Successful response containing a list of encounter condition values
     * @throws ApiError
     */
    public static encounterConditionValueList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<EncounterConditionValue>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-condition-value/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns EncounterConditionValue Successful response
     * @throws ApiError
     */
    public static encounterConditionValueRead(
        id: number,
    ): CancelablePromise<EncounterConditionValue> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/encounter-condition-value/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
