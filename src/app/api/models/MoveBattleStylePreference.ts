/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';

export type MoveBattleStylePreference = {
    /**
     * Chance of using the move, in percent, if HP is under one half of maximum HP.
     */
    low_hp_preference: number;
    /**
     * Chance of using the move, in percent, if HP is over one half of maximum HP.
     */
    high_hp_preference: number;
    move_battle_style: NamedAPIResource;
};

