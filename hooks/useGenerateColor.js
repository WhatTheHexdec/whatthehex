import { useState } from "react";
import createHex from "../createHex";

export default function () {
  const [color, setColor] = useState(createHex());
  return [color, setColor];
}
