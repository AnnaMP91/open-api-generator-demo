/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Description } from './Description';

export type GrowthRate = {
    /**
     * The identifier for this growth rate resource
     */
    id?: number;
    /**
     * The name for this growth rate resource
     */
    name?: string;
    /**
     * The formula used to calculate the rate at which the Pokémon species gains level
     */
    formula?: string;
    /**
     * The description of this growth rate listed in different languages
     */
    descriptions?: Array<Description>;
};

