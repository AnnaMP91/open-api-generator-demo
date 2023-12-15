/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BerryFlavor } from './BerryFlavor';
import type { ContestName } from './ContestName';

export type ContestType = {
    /**
     * The identifier for this contest type resource
     */
    id: number;
    /**
     * The name for this contest type resource
     */
    name: string;
    berry_flavor: BerryFlavor;
    /**
     * The name of this contest type listed in different languages
     */
    names: Array<ContestName>;
};

