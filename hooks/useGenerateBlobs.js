import { useState } from "react";
import createHex from "../createHex";

export default function (color) {
  const bs = [createHex(), createHex(), createHex(), createHex(), color];
  bs.sort(() => (Math.random() > 0.5 ? 1 : -1));
  const [blobs, setBlobs] = useState(bs);

  const generateBlobs = (c, a) => {
    const bs = [];

    for (let i = 0; i < a - 1; i++) {
      bs.push(createHex());
    }
    bs.push(c);
    bs.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setBlobs(bs);
  };

  return [blobs, generateBlobs];
}
