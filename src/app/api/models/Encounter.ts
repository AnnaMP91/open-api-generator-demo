/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncounterConditionValue } from './EncounterConditionValue';
import type { EncounterMethod } from './EncounterMethod';

export type Encounter = {
    /**
     * The lowest level the Pokémon could be encountered at.
     */
    min_level: number;
    /**
     * The highest level the Pokémon could be encountered at.
     */
    max_level: number;
    /**
     * The condition which triggers this encounter.
     */
    condition_values?: Array<EncounterConditionValue>;
    /**
     * Percent chance that this encounter will occur.
     */
    chance?: number;
    /**
     * The method by which this encounter happens.
     */
    method: EncounterMethod;
};

