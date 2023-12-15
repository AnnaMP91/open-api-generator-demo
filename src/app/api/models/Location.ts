/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenerationGameIndex } from './GenerationGameIndex';
import type { Name } from './Name';
import type { NamedAPIResource } from './NamedAPIResource';

export type Location = {
    id?: number;
    name?: string;
    region?: NamedAPIResource;
    names?: Array<Name>;
    game_indices?: Array<GenerationGameIndex>;
    areas?: Array<NamedAPIResource>;
};

