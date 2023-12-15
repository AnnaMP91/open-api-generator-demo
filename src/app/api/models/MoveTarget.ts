/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Description } from './Description';

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, adjacent positions, all opponents, etc.
 */
export type MoveTarget = {
    /**
     * The identifier for this move target resource
     */
    id: number;
    /**
     * The name for this move target resource
     */
    name: string;
    /**
     * The description of this move target listed in different languages
     */
    descriptions: Array<Description>;
};

