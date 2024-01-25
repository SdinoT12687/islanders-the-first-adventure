namespace SpriteKind {
    export const Islander = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Islander, assets.tile`myTile12`, function (sprite, location) {
    LevelHut()
})
function LevelHut () {
    let levelHut = 0
    if (levelHut == 0) {
        tiles.setCurrentTilemap(tilemap`Inside ship`)
        tiles.placeOnRandomTile(Tang, sprites.dungeon.collectibleInsignia)
    }
}
scene.onOverlapTile(SpriteKind.Islander, assets.tile`myTile10`, function (sprite, location) {
    game.splash("Sign: Please return to the kitchen.  ")
})
let Tang: Sprite = null
tiles.placeOnRandomTile(Tang, assets.tile`myTile`)
tiles.setCurrentTilemap(tilemap`level1`)
Tang = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . 4 f 4 4 f 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . 4 4 3 4 4 3 4 4 4 . . . 
    . . . . 4 . 4 4 4 4 . . . . . . 
    . . . . 4 . 4 4 4 4 . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . 6 . . 6 . . . . . . 
    . . . . . . 6 . . 6 . . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Islander)
let Ting = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . 4 f 4 4 f 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . 4 4 3 4 4 3 4 4 4 . . . 
    . . . . 4 . 4 4 4 4 . . . . . . 
    . . . . 4 . 4 4 4 4 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Islander)
controller.moveSprite(Tang)
controller.moveSprite(Ting)
scene.cameraFollowSprite(Tang)
scene.cameraFollowSprite(Ting)
game.showLongText("Search the island for a hut and buy the boat", DialogLayout.Bottom)
tiles.placeOnRandomTile(Ting, assets.tile`myTile`)
