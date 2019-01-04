// these declarations should be put directly in the classes

declare namespace PIXI {
    export class TilingSprite {
        static from(source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): PIXI.Sprite;

        static fromFrame(): PIXI.Sprite;

        static fromImage(): PIXI.Sprite;
    }

    export class CubeTexture {
        static from(resources: string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement, options?: any): BaseTexture;
    }
}
