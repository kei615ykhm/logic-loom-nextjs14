"use client";

// TODO: MemoFormとMemoListコンポーネントを作成する
import { MemoForm } from "../components/memos/MemoForm";
import { MemoList } from "../components/MemoList";
import { useMemos } from "../hooks/useMemos";

export default function Home() {
  const { memos, addMemo, deleteMemo } = useMemos();

  return <div></div>;
}
