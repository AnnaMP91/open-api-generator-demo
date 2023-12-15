/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

/**
 * Areas where the Pokémon species can be encountered in pal park.
 */
export type PalParkEncounterArea = {
    /**
     * The base score given to the player when the referenced Pokemon is caught during a pal park run.
     */
    base_score?: number;
    /**
     * The base rate for encountering the referenced Pokemon in this pal park area.
     */
    rate?: number;
    area?: NamedAPIResource;
};

