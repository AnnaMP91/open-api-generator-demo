/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Encounter } from './Encounter';
import type { NamedAPIResource } from './NamedAPIResource';

/**
 * Version details of an encounter.
 */
export type EncounterVersionDetails = {
    /**
     * The game version this encounter happens in.
     */
    version?: NamedAPIResource;
    /**
     * The total percentage of all encounter potential.
     */
    max_chance?: number;
    /**
     * A list of encounters and their specifics.
     */
    encounter_details?: Array<Encounter>;
};

