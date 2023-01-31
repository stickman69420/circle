namespace Circle {
    export function Circle (R: number, I: number, X: number, Y: number, Spr: Sprite) {
    Spr.setPosition(Math.sin(I) * R + X, Math.cos(I) * R + Y)
    }
}

