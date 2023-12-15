/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type ItemCategory = {
    /**
     * The identifier for this item category resource
     */
    id?: number;
    /**
     * The name for this item category resource
     */
    name?: string;
    /**
     * A list of items that are a part of this category
     */
    items?: Array<NamedAPIResource>;
};

