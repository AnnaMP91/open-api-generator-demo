/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type MoveMetaData = {
    /**
     * The type of status effect caused by the move if any.
     */
    ailment: NamedAPIResource;
    /**
     * The category of move this move falls under, e.g. damage or ailment.
     */
    category: NamedAPIResource;
    /**
     * The minimum number of times this move hits. Null if it always only hits once.
     */
    min_hits?: number | null;
    /**
     * The maximum number of times this move hits. Null if it always only hits once.
     */
    max_hits?: number | null;
    /**
     * The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
     */
    min_turns?: number | null;
    /**
     * The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
     */
    max_turns?: number | null;
    /**
     * The amount of hp gained by the attacking Pokemon when it uses this move.
     */
    drain?: number | null;
    /**
     * The amount of hp gained by the target Pokemon when it receives this move.
     */
    healing?: number | null;
    /**
     * Critical hit rate bonus.
     */
    crit_rate?: number | null;
    /**
     * The chance of the target being inflicted with the status condition ailment.
     */
    ailment_chance?: number | null;
    /**
     * The chance of the target flinching when hit by this move.
     */
    flinch_chance?: number | null;
    /**
     * The chance of the attacking Pokemon lowering the target's stat.
     */
    stat_chance?: number | null;
};

