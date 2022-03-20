const ICAgent = require("@dfinity/agent");
const fetch = require("node-fetch");
const { Crypto } = require("@peculiar/webcrypto");
const fs = require("fs");
const path = require("path");

// From .dfx/local/canisters/...
const did = ({ IDL }) => {
  const Canister_settings = IDL.Record({
    freezing_threshold: IDL.Opt(IDL.Nat),
    controllers: IDL.Opt(IDL.Vec(IDL.Principal)),
    memory_allocation: IDL.Opt(IDL.Nat),
    compute_allocation: IDL.Opt(IDL.Nat),
  });
  return IDL.Service({
    appendWasm: IDL.Func([IDL.Vec(IDL.Nat8)], [IDL.Nat], []),
    deployWasm: IDL.Func(
      [IDL.Opt(Canister_settings), IDL.Vec(IDL.Nat8)],
      [IDL.Principal],
      []
    ),
    getWasmHash: IDL.Func([], [IDL.Vec(IDL.Nat8)], []),
    reset: IDL.Func([], [], []),
  });
};
console.log(`did`, did);

global.crypto = new Crypto();

function getAgent() {
  return new ICAgent.HttpAgent({
    fetch: fetch,
    host: ICP_ENDPOINT,
    identity: new ICAgent.AnonymousIdentity(),
  });
}

const ICP_ENDPOINT = "http://localhost:8000";

const agent = getAgent();

console.log(ICAgent);
const actorClass = ICAgent.Actor.createActorClass(did);

const actor = new actorClass({
  canisterId: "6xkgy-yyaaa-aaaah-abdda-cai",
  agent,
});

const bigWasmPath = `ledger-canister.wasm`;

const data = fs.readFileSync(bigWasmPath);

const SIZE_CHUNK = 1024000; // one megabyte

const chunks = [];

for (var i = 0; i < data.byteLength / SIZE_CHUNK; i++) {
  const startIndex = i * SIZE_CHUNK;
  chunks.push(data.slice(startIndex, startIndex + SIZE_CHUNK));
}

// console.log(chunks);

(async () => {
  console.log("resetting wasm");
  await agent.fetchRootKey(); // in development
  await actor.reset();
  console.log("resetted");
  for(var i = 0; i < chunks.length; i++) {
    const chnk = chunks[i]
    console.log("appending wasm ", i);
    const size = await actor.appendWasm(Array.from(chnk));
    console.log("appended: size is ", size);
  };

  process.exit(1);
})();
