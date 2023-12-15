/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Characteristic = {
    /**
     * The identifier for this characteristic resource
     */
    id: number;
    /**
     * The remainder of the highest stat/IV divided by 5
     */
    gene_modulo: number;
    /**
     * The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5
     */
    possible_values: Array<number>;
};

