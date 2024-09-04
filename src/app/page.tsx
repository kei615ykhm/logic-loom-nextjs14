"use client";

import { useMemos } from "../hooks/useMemos";

export default function Home() {
  const { memos, addMemo, deleteMemo } = useMemos();

  return (
    <div>
      <button onClick={() => addMemo("テストメモ")}>メモを追加</button>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>{memo.content}</li>
        ))}
      </ul>
    </div>
  );
}
