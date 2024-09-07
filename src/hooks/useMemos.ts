import { useState, useEffect } from "react";
import { Memo } from "../types";

// メモの状態を管理するカスタムフック
export const useMemos = () => {
  // メモの状態と更新関数を定義
  const [memos, setMemos] = useState<Memo[]>([]);

  // クライアントサイドでのみローカルストレージからメモを取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("ローカルストレージからメモを取得");
      const storedMemos = localStorage.getItem("memos");
      if (storedMemos) {
        console.log("ローカルストレージで見つかったメモ:", storedMemos);
        setMemos(JSON.parse(storedMemos));
      } else {
        console.log("ローカルストレージにメモはありません");
      }
    }
  }, []);

  // メモの状態が更新されたらローカルストレージに保存
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("ローカルストレージにメモを保存");
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);

  // 新しいメモを追加する関数
  const addMemo = (content: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(), // 現在時刻をIDとして設定
      content,
      createdAt: new Date().toISOString(), // 現在の日時を作成時刻として設定
    };
    console.log("新しいメモを追加:", newMemo);
    setMemos((prevMemos) => [...prevMemos, newMemo]); // 既存のメモに新しいメモを追加
  };

  // 指定したIDのメモを削除する関数
  const deleteMemo = (id: string) => {
    console.log("メモを削除:", id);
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id)); // 指定したID以外のメモのみを残す
  };

  // メモの状態にアクセスするためのメモ、追加、削除の関数を返す
  return { memos, addMemo, deleteMemo };
};
