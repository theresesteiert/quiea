const VERTEX_SHADER_SOURCE = /*glsl*/ `
    attribute vec4 position;
    void main() {
        gl_Position = position;
    }
`;
