function Circle (R: number, I: number, X: number, Y: number) {
    mySprite.setPosition(Math.sin(I) * R + X, Math.cos(I) * R + Y)
}
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . 
    . . . 
    . . . 
    `, SpriteKind.Player)
let a = 0
let b = 10
forever(function () {
    a += 0.1
    Circle(b, a, 80, 60)
    pause(10)
    projectile = sprites.createProjectileFromSprite(img`
        2 
        `, mySprite, 0, 0)
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        sprites.destroy(value, effects.none, 3500)
    }
})
