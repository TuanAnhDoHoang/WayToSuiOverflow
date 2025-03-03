/*
/// Module: contract
module contract::contract;
*/

// For Move coding conventions, see
// https://docs.sui.io/concepts/sui-move-concepts/conventions

module contract::sui_place;
use sui::object::id_to_address;
use std::vector;
use sui::dynamic_object_field;

public struct AdminCap has key{
    id: UID,
    place: address 
}

public struct Place has key{
    id: UID,
    pause: bool, 
}

public struct Quarant has key, store{
    id: UID,
    quarant_id: u8,
    //contain board 
    board: vector<vector<u32>>, // 200x200
}
public fun makeRow(size: u8): vector<u32>{
    let mut row: vector<u32> = vector::empty();
    let mut iter = 0;
    while(iter < size){
        row.push_back(4_294_967_295);
        iter = iter + 1;
    };
    row
}
public fun makeBoard(size: u8): vector<vector<u32>> {
    let row = makeRow(size);
    let mut board : vector<vector<u32>> = vector::empty();
    let mut iter = 0;
    while(iter < size){
        board.push_back(row);
        iter = iter + 1;
    };
    board
}
fun init(ctx: &mut TxContext) {
    //Create Place and make it to be shared obejct
    //Create four quarant - signed to Place 
    //Transfer AdminCap to user
    let mut place = Place{
        id: object::new(ctx),
        pause: false,
    };
    let admin = AdminCap {
        id: object::new(ctx),
        place: object::uid_to_address(&place.id),
    };

    let mut iter = 0;
    while (iter < 4) {
        //Searching about objectfield        
        //create quanrant board
        let quarant = Quarant{
            id: object::new(ctx),
            quarant_id: iter,
            board: makeBoard(200),
        };
        dynamic_object_field::add(&mut place.id, iter, quarant);
        iter = iter +  1;
    };
    transfer::transfer(admin,ctx.sender());
    transfer::share_object(place);
}
public fun getQuarantId(x: u64, y: u64): u8{
    if(x < 200){
        if(y < 200){0} 
        else {2}
    }
    else{
        if(y < 200){1} 
        else {3}
    }
}
public fun set_pixel_at(place: &mut Place, x: u64, y: u64, value: u32){
    let quarant_id = getQuarantId(x, y);
    let mut quarant = dynamic_object_field::borrow_mut<u8,Quarant >(&mut place.id,quarant_id);
    let mut cell: &mut u32 = vector::borrow_mut(vector::borrow_mut(&mut quarant.board,x % 200), y % 200);
    *cell = value; 
}
public fun getQuarant(place: &mut Place): vector<address>{
    let mut iter = 0;
    let mut quarantAddresses: vector<address> = vector::empty();
    while(iter < 4){
        let quarant: &mut Quarant = dynamic_object_field::borrow_mut<u8, Quarant>(&mut place.id, iter);
        let quarantAddress: address = object::uid_to_address(&quarant.id);
        quarantAddresses.push_back(quarantAddress);
        iter = iter + 1;
    };
    quarantAddresses
}

public fun triggerPause(admin: &AdminCap, place: &mut Place){
    assert!(admin.place == object::uid_to_address(&place.id));
    place.pause = !place.pause;
}
