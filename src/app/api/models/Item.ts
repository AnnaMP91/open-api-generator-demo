/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlavorText } from './FlavorText';
import type { ItemAttribute } from './ItemAttribute';
import type { ItemCategory } from './ItemCategory';
import type { ItemFlingEffect } from './ItemFlingEffect';
import type { VerboseEffect } from './VerboseEffect';

export type Item = {
    id?: number;
    name?: string;
    cost?: number;
    fling_power?: number;
    effect_entries?: Array<VerboseEffect>;
    flavor_text_entries?: Array<FlavorText>;
    attributes?: Array<ItemAttribute>;
    category?: ItemCategory;
    fling_effect?: ItemFlingEffect;
};

