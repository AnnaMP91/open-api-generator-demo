/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';
import type { Type } from './Type';
import type { VerboseEffect } from './VerboseEffect';

export type PastMoveStatValues = {
    /**
     * The percent value of how likely this move is to be successful.
     */
    accuracy: number;
    /**
     * The percent value of effect occurring.
     */
    effect_chance?: number;
    /**
     * The base power of this move with a value of 0 if it does not have a base power.
     */
    power: number;
    /**
     * The power points this move has left.
     */
    pp: number;
    /**
     * The list of previous effects this move has had across version groups.
     */
    effect_entries?: Array<{
        effect?: VerboseEffect;
        version_group?: NamedAPIResource;
    }>;
    type?: Type;
};

