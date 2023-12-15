/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type PokemonMove = {
    /**
     * The move the Pokémon can learn
     */
    move?: NamedAPIResource;
    /**
     * A list of details showing how the Pokémon can learn the move
     *
     */
    version_group_details?: Array<{
        /**
         * The minimum level to learn the move
         */
        level_learned_at: number;
        /**
         * The method by which the Pokémon learns the move
         */
        move_learn_method: NamedAPIResource;
        /**
         * The version group in which the move can be learned
         */
        version_group: NamedAPIResource;
    }>;
};

