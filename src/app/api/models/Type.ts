/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Type = {
    /**
     * The identifier for this type resource.
     */
    id?: number;
    /**
     * The name for this type resource.
     */
    name?: string;
    damage_relations?: {
        double_damage_from?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
        double_damage_to?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
        half_damage_from?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
        half_damage_to?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
        no_damage_from?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
        no_damage_to?: Array<{
            /**
             * The name of the related type.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the related type.
             */
            url?: string;
        }>;
    };
    game_indices?: Array<{
        /**
         * The internal id of an api resource within game data.
         */
        game_index?: number;
        generation?: {
            /**
             * The generation this game index is related to.
             */
            name?: string;
            /**
             * The URL of the API endpoint for the generation.
             */
            url?: string;
        };
    }>;
    generation?: {
        /**
         * The generation this type originated in.
         */
        name?: string;
        /**
         * The URL of the API endpoint for this generation.
         */
        url?: string;
    };
    move_damage_class?: {
        /**
         * The name of this move damage class.
         */
        name?: string;
        /**
         * The URL of the API endpoint for this move damage class.
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
    pokemon?: Array<{
        slot?: number;
    }>;
};

