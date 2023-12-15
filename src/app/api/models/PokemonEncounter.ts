/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncounterVersionDetails } from './EncounterVersionDetails';
import type { NamedAPIResource } from './NamedAPIResource';

/**
 * Encounters Pokemon that can be encountered in the game and the version groups in which they can be encountered.
 */
export type PokemonEncounter = {
    pokemon?: NamedAPIResource;
    version_details?: Array<EncounterVersionDetails>;
};

