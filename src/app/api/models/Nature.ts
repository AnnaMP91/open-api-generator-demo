/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MoveBattleStylePreference } from './MoveBattleStylePreference';
import type { NatureStatChange } from './NatureStatChange';

export type Nature = {
    id: number;
    name: string;
    decreased_stat: string;
    increased_stat: string;
    hates_flavor: string;
    likes_flavor: string;
    pokeathlon_stat_changes?: Array<NatureStatChange>;
    move_battle_style_preferences?: Array<MoveBattleStylePreference>;
};

