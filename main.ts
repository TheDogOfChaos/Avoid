input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let Obstacle_1 = game.createSprite(randint(0, 5), 0)
let Obstacle_2 = game.createSprite(randint(0, 5), 0)
let Obstacle_3 = game.createSprite(randint(0, 5), 0)
let Obstacle_4 = game.createSprite(randint(0, 5), 0)
basic.forever(function () {
    for (let index = 0; index <= 5; index++) {
        basic.pause(1000)
        Obstacle_1.change(LedSpriteProperty.Y, 1)
        Obstacle_2.change(LedSpriteProperty.Y, 1)
        Obstacle_3.change(LedSpriteProperty.Y, 1)
        Obstacle_4.change(LedSpriteProperty.Y, 1)
    }
    game.addScore(1)
    Obstacle_1.set(LedSpriteProperty.Y, 0)
    Obstacle_2.set(LedSpriteProperty.Y, 0)
    Obstacle_3.set(LedSpriteProperty.Y, 0)
    Obstacle_4.set(LedSpriteProperty.Y, 0)
    Obstacle_1.set(LedSpriteProperty.X, randint(0, 5))
    Obstacle_2.set(LedSpriteProperty.X, randint(0, 5))
    Obstacle_3.set(LedSpriteProperty.X, randint(0, 5))
    Obstacle_4.set(LedSpriteProperty.X, randint(0, 5))
})
basic.forever(function () {
    if ((Obstacle_1.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) || Obstacle_2.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) || (Obstacle_3.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) || Obstacle_4.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X))) && (Obstacle_1.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y) || Obstacle_2.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y) || (Obstacle_3.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y) || Obstacle_4.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)))) {
        game.gameOver()
    }
})
