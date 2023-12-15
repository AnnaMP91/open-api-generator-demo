/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BerryFirmness } from './BerryFirmness';
import type { BerryFlavorMap } from './BerryFlavorMap';

export type Berry = {
    /**
     * The identifier for this berry resource
     */
    id: number;
    /**
     * The name for this berry resource
     */
    name: string;
    /**
     * Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
     */
    growth_time: number;
    /**
     * The maximum number of these berries that can grow on one tree in Generation IV
     */
    max_harvest: number;
    /**
     * The power of the move "Natural Gift" when used with this Berry
     */
    natural_gift_power: number;
    /**
     * The size of this Berry, in millimeters
     */
    size: number;
    /**
     * The smoothness of this Berry, used in making Pokéblocks or Poffins
     */
    smoothness: number;
    /**
     * The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
     */
    soil_dryness: number;
    firmness: BerryFirmness;
    /**
     * A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
     */
    flavors: Array<BerryFlavorMap>;
};

