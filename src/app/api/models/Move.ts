/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbilityEffectChange } from './AbilityEffectChange';
import type { ContestComboSets } from './ContestComboSets';
import type { MoveMetaData } from './MoveMetaData';
import type { MoveStatChange } from './MoveStatChange';
import type { Name } from './Name';
import type { PastMoveStatValues } from './PastMoveStatValues';
import type { VerboseEffect } from './VerboseEffect';

export type Move = {
    /**
     * The identifier for this move resource
     */
    id: number;
    /**
     * The name for this move resource
     */
    name: string;
    /**
     * The percent value of how likely this move is to be successful
     */
    accuracy?: number | null;
    /**
     * The percent value of the additional effects this move has occuring
     */
    effect_chance?: number | null;
    /**
     * Power points. The number of times this move can be used
     */
    pp: number;
    /**
     * A value of 0 means this move goes last in the turn, and 1 means it goes first
     */
    priority: number;
    /**
     * The base power of this move with a value of 0 if it does not have a base power
     */
    power?: number | null;
    contest_combos?: ContestComboSets;
    contest_type?: {
        name: string;
        url: string;
    };
    contest_effect?: {
        url: string;
    };
    damage_class?: {
        name: string;
        url: string;
    };
    effect_entries?: Array<VerboseEffect>;
    effect_changes?: Array<AbilityEffectChange>;
    generation: {
        name: string;
        url: string;
    };
    meta?: MoveMetaData;
    names?: Array<Name>;
    past_values?: Array<PastMoveStatValues>;
    stat_changes?: Array<MoveStatChange>;
    super_contest_effect?: {
        url: string;
    };
    target: {
        name: string;
        url: string;
    };
    type: {
        name: string;
        url: string;
    };
};

