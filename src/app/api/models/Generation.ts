/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Language } from './Language';

export type Generation = {
    /**
     * The identifier for this generation resource
     */
    id?: number;
    /**
     * The name for this generation resource
     */
    name?: string;
    abilities?: Array<{
        /**
         * The name of this ability
         */
        name?: string;
        /**
         * Whether or not this ability is a hidden one
         */
        is_hidden?: boolean;
        /**
         * The slot this ability occupies in this Pokémon species
         */
        slot?: number;
    }>;
    names?: Array<{
        /**
         * The localized name for an API resource in a specific language
         */
        name?: string;
        language?: Language;
    }>;
};

