// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000d0000010303030303030400000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000608020e0e090807000000000c0e0e0500000000010d0a0e0e0b0d0400000c0e0e0e0e0e0e0500000c0e0e0e0e0e0e0500000c0e0e0e0e0f0e0500000c0e0e0e0e0e0e050000060808080808080700`, img`
. 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 2 2 . . 2 2 2 . 
. . . 2 . . 2 . . . 
. 2 2 2 . . 2 2 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000d0000030606060606060100000509090909090902000005090b09090a090200000509090a090a0a020000050a0909090909020000050909090a090902000005090a0909090a0200000509090a090a090200000509090a0a0909020000050a090909090a02000005090a0a09090a0200000509090a090a0a020000040808080808080700`, img`
. 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . 2 . 2 . 
. 2 . . 2 . 2 2 2 . 
. 2 2 . . . . . 2 . 
. 2 . . . 2 . . 2 . 
. 2 . 2 . . . 2 2 . 
. 2 . . 2 . 2 . 2 . 
. 2 . . 2 2 . . 2 . 
. 2 2 . . . . 2 2 . 
. 2 . 2 2 . . 2 2 . 
. 2 . . 2 . 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1400140001010101010101010101000000010101010101010103030303050303030100000001030303030301010303030303030303010101010103030303030101030302030303030303030303030303030303010103030303030303030303030303030303030301010303030303030303030303030303030303030101030303030303050303030303030303030303010103050303030303030303030303030303030301010303030303030303010101010103030303030101030303030503030301040404010303030303010103030303030303030104040401030303030301010303030303030303010404040103030303030101010101010101010101010101010303030303010103030303030303030303030303030303030301010303030303030303030303030303030303030101030603030303030303030303030303030303010103030303030303030303030303030303030301010303030303030303030303030303030303030101030303030303030303030303030303030303010101010101010101010101010101010101010101`, img`
2222222222...2222222
2........2...2.....2
2........22222...2.2
2...........2..2...2
2.........2........2
2................2.2
2............2.2...2
2.........2........2
2........22222....22
2........2...2.2...2
2........2...2.....2
2........2...2...2.2
222222222222222....2
2..........2....2..2
2......2......2....2
2.........2.2....2.2
2.......2..........2
2....2.....2.2.2...2
2.......2........2.2
22222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.saplingPine,sprites.dungeon.stairNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
