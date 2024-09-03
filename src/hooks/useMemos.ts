import { useState } from "react";
import { Memo } from "../types";

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  return { memos };
};
