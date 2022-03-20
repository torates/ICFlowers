import Array "mo:base/Array";
import Blob "mo:base/Blob";
import MgmtCanister "./MgmtCanister";
import P "mo:base/Prelude";

actor {

    var canisterWasm: [Nat8] = [];
    
    public func reset(): async () {
        canisterWasm := [];
    };

    ////////////////////////////////
    ////////////////////////////////
    // append to the `canisterWasm`
    public func appendWasm(blob: [Nat8]): async (Nat) {
        canisterWasm := Array.append<Nat8>(canisterWasm, blob);
        // return casnisterWasm size
        canisterWasm.size()
    };

    public func getWasmHash(): async (Blob) {
        // return hash of the wasm
        P.nyi()
    };

    // hash 
    public func deployWasm(canisterSettings: ?MgmtCanister.Canister_settings, arg: [Nat8]): async (Principal) {
        let mgmtCanister = MgmtCanister.getManagementCanister();
        let resp = await mgmtCanister.create_canister({settings= null});
        // deploy the `canisterWasm` metadata and return the Principal
        //  ({
    //     mode : {#install; #reinstall; #upgrade};
    //     canister_id : Principal;
    //     wasm_module : Blob;
    //     arg : Blob;
    //   }) -> ();
        let installResp = await mgmtCanister.install_code({mode=#install; canister_id=resp.canister_id;wasm_module=Blob.fromArray(canisterWasm);arg=Blob.fromArray(arg);});
        return resp.canister_id;
    };
};
