/**
 * Helper class to create a webGL Program
 *
 * @class
 * @private
 */
export default class GLProgram
{
    constructor(program, uniformData)
    {
        /**
         * The shader program
         *
         * @member {WebGLProgram}
         * @private
         */
        this.program = program;

        /**
         * holds the uniform data which contains uniform locations
         * and current uniform values used for caching and preventing unneeded GPU commands
         * @member {Object}
         * @private
         */
        this.uniformData = uniformData;

        /**
         * uniformGroups holds the various upload functions for the shader. Each uniform group
         * and program have a unique upload function generated.
         * @member {Object}
         * @private
         */
        this.uniformGroups = {};
    }

    /**
     * Destroys this program
     * TODO
     * @private
     */
    destroy()
    {
        this.uniformData = null;
        this.uniformGroups = null;
        this.program = null;
    }
}
