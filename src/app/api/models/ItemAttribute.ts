/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type ItemAttribute = {
    /**
     * The identifier for this item attribute resource
     */
    id?: number;
    /**
     * The name for this item attribute resource
     */
    name?: string;
    /**
     * A list of items that have this attribute
     */
    items?: Array<NamedAPIResource>;
};

