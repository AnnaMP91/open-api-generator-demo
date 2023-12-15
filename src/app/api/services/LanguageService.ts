/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Language } from '../models/Language';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LanguageService {

    /**
     * @param limit
     * @param offset
     * @returns any OK
     * @throws ApiError
     */
    public static languageList(
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        /**
         * The total number of languages.
         */
        count?: number;
        /**
         * URL to retrieve the next page of languages.
         */
        next?: string | null;
        /**
         * URL to retrieve the previous page of languages.
         */
        previous?: string | null;
        results?: Array<Language>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/language/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id
     * @returns Language Successful response
     * @throws ApiError
     */
    public static languageRead(
        id: number,
    ): CancelablePromise<Language> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/language/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
