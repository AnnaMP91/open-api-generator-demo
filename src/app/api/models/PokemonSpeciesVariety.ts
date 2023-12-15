/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pokemon } from './Pokemon';

export type PokemonSpeciesVariety = {
    /**
     * Whether this is the default "natural" variety of this species. Note that "default" is
     * subjective and that it may not match the Pokémon games' official status.
     *
     */
    is_default?: boolean;
    pokemon?: Pokemon;
    /**
     * The name of this Pokémon species variety
     */
    name?: string;
};

