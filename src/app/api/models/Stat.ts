/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MoveStatAffectSets } from './MoveStatAffectSets';
import type { NatureStatAffectSets } from './NatureStatAffectSets';

export type Stat = {
    id: number;
    name: string;
    game_index: number;
    is_battle_only?: boolean;
    affecting_moves?: MoveStatAffectSets;
    affecting_natures?: NatureStatAffectSets;
};

