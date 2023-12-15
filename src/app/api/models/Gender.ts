/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Gender = {
    /**
     * The identifier for this gender resource
     */
    id?: number;
    /**
     * The name for this gender resource
     */
    name?: string;
    pokemon_species_details?: Array<{
        /**
         * The chance of this Pokémon being female, in eighths; or -1 for genderless
         */
        rate?: number;
    }>;
};

