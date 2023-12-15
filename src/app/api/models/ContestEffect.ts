/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlavorText } from './FlavorText';
import type { VerboseEffect } from './VerboseEffect';

export type ContestEffect = {
    /**
     * The identifier for this contest effect resource
     */
    id: number;
    /**
     * The base number of hearts the user of this move gets
     */
    appeal: number;
    /**
     * The base number of hearts the user's opponent loses
     */
    jam: number;
    /**
     * The flavor text of this contest effect listed in different languages
     */
    effect_entries: Array<VerboseEffect>;
    /**
     * The flavor text of this contest effect listed in different languages
     */
    flavor_text_entries: Array<FlavorText>;
};

