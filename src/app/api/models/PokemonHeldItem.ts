/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';
import type { Version } from './Version';

export type PokemonHeldItem = {
    item?: Item;
    version_details?: Array<{
        rarity?: number;
        version?: Version;
    }>;
};

