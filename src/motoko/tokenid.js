<<<<<<< HEAD
import { Principal } from '@dfinity/principal';

const tokenIdentifier = (principal, index) => {
    const padding = Buffer.from("\x0Atid");
    const array = new Uint8Array([
        ...padding,
        ...Principal.fromText(principal).toUint8Array(),
        ...to32bits(index),
    ]);
    return Principal.fromUint8Array(array).toText();
};

const to32bits = num => {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
}

=======
import { Principal } from '@dfinity/principal';

const tokenIdentifier = (principal, index) => {
    const padding = Buffer.from("\x0Atid");
    const array = new Uint8Array([
        ...padding,
        ...Principal.fromText(principal).toUint8Array(),
        ...to32bits(index),
    ]);
    return Principal.fromUint8Array(array).toText();
};

const to32bits = num => {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
}

>>>>>>> 0838e5d3e009742de0a1933affcdd17062508450
console.log(tokenIdentifier(process.argv[2], process.argv[3]));