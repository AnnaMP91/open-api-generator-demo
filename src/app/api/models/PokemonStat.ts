/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type PokemonStat = {
    /**
     * The stat the Pokémon has.
     */
    stat?: NamedAPIResource;
    /**
     * The effort points (EV) the Pokémon has in the stat.
     */
    effort?: number;
    /**
     * The base value of the stat.
     */
    base_stat?: number;
};

