"use strict";

// NOTE: This benchmark partly compares apples and oranges in that it measures protocol buffers,
// which is purely a binary format, and JSON, which is purely a string format.
//
// This matters because strings aren't actually transfered over the network but must still be
// converted to binary somewhere down the road. Because this can't be measured reliably, this
// benchmark compares both pure string performance of JSON and additional binary conversion of the
// same data using node buffers. Actual JSON performance on the network level should be somewhere
// in between.
const newSuite = require("./suite.cjs");
const payload = require("./data/bench.json");

// protobuf.js static: load the proto
const pbjsCls = require("./data/static_pbjs.cjs").Test;
const pbjsMsg = payload;
const pbjsBuf = pbjsCls.encode(pbjsMsg).finish();

// JSON: set up a string and a buffer
const jsonMsg = payload;
const jsonStr = JSON.stringify(jsonMsg);

// google-protobuf: load the proto, set up an Uint8Array and a message
const jspbCls = require("./data/static_jspb.cjs").Test;
const jspbBuf = new Uint8Array(Array.prototype.slice.call(pbjsBuf));
const jspbMsg = jspbCls.deserializeBinary(jspbBuf);

import("./data/static_aspr.js").then(asprMod => [
  newSuite("encoding")
      .add("as-proto", () => {
          asprMod.encode();
      })
      .add("protobuf.js", () => {
          pbjsCls.encode(pbjsMsg).finish();
      })
      .add("JSON", () => {
          JSON.stringify(jsonMsg);
      })
      .add("google-protobuf", () => {
          jspbMsg.serializeBinary();
      }),
  newSuite("decoding")
      .add("as-proto", () => {
          asprMod.decode();
      })
      .add("protobuf.js", () => {
          pbjsCls.decode(pbjsBuf);
      })
      .add("JSON", () => {
          JSON.parse(jsonStr);
      })
      .add("google-protobuf", () => {
          jspbCls.deserializeBinary(jspbBuf);
      }),
  newSuite("combined")
      .add("as-proto", () => {
          asprMod.encodeDecode();
      })
      .add("protobuf.js", () => {
          pbjsCls.decode(pbjsCls.encode(pbjsMsg).finish());
      })
      .add("JSON", () => {
          JSON.parse(JSON.stringify(jsonMsg));
      })
      .add("google-protobuf", () => {
          jspbCls.deserializeBinary(jspbMsg.serializeBinary());
      })
]).then(suites => {
    suites.forEach(suite => {
        suite.run();
    })
})