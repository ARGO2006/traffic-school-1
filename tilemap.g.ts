// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000a000b0b0b060b0b0b0b060b0b0b0b0b0b040b0b0b0b040b0b0b0b0b0b040b0b0b0b040b0b0b0b0b0b040b0b0b0b040b0b0b07010103010101010301010908010102010101010201010a0b0b0b040b0b0b0b040b0b0b0b0b0b040b0b0b0b040b0b0b0b0b0b040b0b0b0b040b0b0b0b0b0b050b0b0b0b050b0b0b`, img`
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
