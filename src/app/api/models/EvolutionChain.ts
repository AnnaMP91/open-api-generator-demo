/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvolutionTrigger } from './EvolutionTrigger';
import type { Item } from './Item';
import type { Location } from './Location';
import type { Move } from './Move';
import type { PokemonSpecies } from './PokemonSpecies';
import type { Type } from './Type';

export type EvolutionChain = {
    /**
     * The identifier for this evolution chain resource
     */
    id: number;
    /**
     * The item that a baby Pokémon would be holding when born during a forced evolution
     */
    baby_trigger_item?: Item | null;
    chain: {
        /**
         * Whether or not this is a baby Pokémon
         */
        is_baby?: boolean;
        /**
         * The Pokémon species at this point in the evolution chain
         */
        species?: PokemonSpecies;
        /**
         * The chain of Pokémon species that forms part of this evolution chain
         */
        evolution_details?: Array<{
            item?: Item;
            trigger?: EvolutionTrigger;
            /**
             * The required female gender of the evolving Pokémon species. Must be either 1 or 2, or null if the Pokémon species has no gender or the gender is fixed.
             */
            gender?: number | null;
            held_item?: Item;
            known_move?: Move;
            known_move_type?: Type;
            location?: Location;
            /**
             * The minimum required level of the evolving Pokémon species
             */
            min_level?: number | null;
            /**
             * The minimum required happiness of the evolving Pokémon species
             */
            min_happiness?: number | null;
            /**
             * The minimum required beauty of the evolving Pokémon species
             */
            min_beauty?: number | null;
            /**
             * The minimum required affection of the evolving Pokémon species
             */
            min_affection?: number | null;
            /**
             * Whether or not it must be raining in the overworld to evolve into this Pokémon species
             */
            needs_overworld_rain?: boolean;
            party_species?: PokemonSpecies;
            party_type?: Type;
            /**
             * The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense, 0 means Attack = Defense, and -1 means Attack < Defense.
             */
            relative_physical_stats?: number | null;
            /**
             * The required time of day. Day or night.
             */
            time_of_day?: 'day' | 'night';
            trade_species?: PokemonSpecies;
            /**
             * Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
             */
            turn_upside_down?: boolean;
        }> | null;
    };
};

