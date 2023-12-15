/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncounterMethodRate } from './EncounterMethodRate';
import type { Location } from './Location';
import type { Name } from './Name';
import type { PokemonEncounter } from './PokemonEncounter';

export type LocationArea = {
    id?: number;
    name?: string;
    game_index?: number;
    encounter_method_rates?: Array<EncounterMethodRate>;
    location?: Location;
    names?: Array<Name>;
    pokemon_encounters?: Array<PokemonEncounter>;
};

