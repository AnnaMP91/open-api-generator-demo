/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Name } from './Name';
import type { NaturePokeathlonStatAffectSets } from './NaturePokeathlonStatAffectSets';

export type PokeathlonStat = {
    /**
     * The identifier for this Pokéathlon stat resource
     */
    id: number;
    /**
     * The name for this Pokéathlon stat resource
     */
    name: string;
    /**
     * The name of this Pokéathlon stat listed in different languages
     */
    names: Array<Name>;
    /**
     * A detail of natures which affect this Pokéathlon stat positively or negatively
     */
    affecting_natures: {
        /**
         * A list of natures that positively affect this Pokéathlon stat
         */
        increase?: Array<NaturePokeathlonStatAffectSets>;
        /**
         * A list of natures that negatively affect this Pokéathlon stat
         */
        decrease?: Array<NaturePokeathlonStatAffectSets>;
    };
};

