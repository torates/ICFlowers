module {

    // type user_id = Principal;
    // type wasm_module = Blob;

    public type Canister_settings = {
    controllers : ?[Principal];
    compute_allocation : ?Nat;
    memory_allocation : ?Nat;
    freezing_threshold : ?Nat;
    };

    public type definite_canister_settings = {
    controllers : [Principal];
    compute_allocation : Nat;
    memory_allocation : Nat;
    freezing_threshold : Nat;
    };

    public type mgmtCanisterIDL = actor {
        deposit_cycles: ({canister_id: Principal}) -> async ();
        create_canister : ({
            settings : ?Canister_settings
        }) -> async ({canister_id : Principal});
        update_settings : ({
            canister_id : Principal;
            settings : Canister_settings
        }) -> async ();
        install_code : ({
            mode : {#install; #reinstall; #upgrade};
            canister_id : Principal;
            wasm_module : Blob;
            arg : Blob;
        }) -> async ();
        uninstall_code : ({canister_id : Principal}) -> async ();
        start_canister : ({canister_id : Principal}) -> async ();
        stop_canister : ({canister_id : Principal}) -> async ();
        canister_status : ({canister_id : Principal}) -> async ({
            status : { #running; #stopping; #stopped };
            settings: definite_canister_settings;
            module_hash: ?Blob;
            memory_size: ?Nat;
            cycles: ?Nat;
        });
    };


    public func getManagementCanister(): mgmtCanisterIDL {
        let canister = actor("aaaaa-aa"): mgmtCanisterIDL;
        return canister;
    };

    // actor ic {
    //   create_canister : ({
    //     settings : ?Canister_settings
    //   }) -> ({canister_id : Principal});
    //   update_settings : ({
    //     canister_id : Principal;
    //     settings : Canister_settings
    //   }) -> ();
    //   install_code : ({
    //     mode : {#install; #reinstall; #upgrade};
    //     canister_id : Principal;
    //     wasm_module : Blob;
    //     arg : Blob;
    //   }) -> ();
    //   uninstall_code : ({canister_id : Principal}) -> ();
    //   start_canister : ({canister_id : Principal}) -> ();
    //   stop_canister : ({canister_id : Principal}) -> ();
    //   canister_status : ({canister_id : Principal}) -> ({
    //       status : { #running; #stopping; #stopped };
    //       settings: definite_canister_settings;
    //       module_hash: ?Blob;
    //       memory_size: ?Nat;
    //       cycles: ?Nat;
    //   });
    //   delete_canister : ({canister_id : Principal}) -> ();
    //   deposit_cycles : ({canister_id : Principal}) -> ();
    //   raw_rand : () -> (Blob);

    //   // provisional interfaces for the pre-ledger world
    //   provisional_create_canister_with_cycles : ({
    //     amount: ?Nat;
    //     settings : ?Canister_settings
    //   }) -> ({canister_id : Principal});
    //   provisional_top_up_canister :
    //     ({ canister_id: Principal; amount: Nat }) -> ();
    // };

}