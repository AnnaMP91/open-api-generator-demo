/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Description } from './Description';
import type { Name } from './Name';

/**
 * Methods by which Pokémon can learn moves.
 */
export type MoveLearnMethod = {
    /**
     * The identifier for this move learn method resource.
     */
    id: number;
    /**
     * The name for this move learn method resource.
     */
    name: string;
    /**
     * The description of this move learn method listed in different languages.
     */
    descriptions?: Array<Description>;
    /**
     * The name of this move learn method listed in different languages.
     */
    names?: Array<Name>;
};

