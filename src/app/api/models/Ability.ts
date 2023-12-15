/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Ability = {
    /**
     * The identifier for this ability resource.
     */
    id?: number;
    /**
     * The name for this ability resource.
     */
    name?: string;
    /**
     * Whether or not this ability originated in the main series of the video games.
     */
    is_main_series?: boolean;
    generation?: {
        /**
         * The generation this ability originated in.
         */
        name?: string;
        /**
         * The URL of the API endpoint for this generation.
         */
        url?: string;
    };
    names?: Array<{
        /**
         * The localized name for an API resource in a specific language.
         */
        name?: string;
        language?: {
            /**
             * The name of the language.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the language.
             */
            url?: string;
        };
    }>;
};

