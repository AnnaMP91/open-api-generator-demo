/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BerryFlavorMap } from './BerryFlavorMap';

export type BerryFlavor = {
    /**
     * The identifier for this berry flavor resource
     */
    id: number;
    /**
     * The name for this berry flavor resource
     */
    name: string;
    /**
     * A list of the berries with this flavor
     */
    berries?: Array<BerryFlavorMap>;
};

