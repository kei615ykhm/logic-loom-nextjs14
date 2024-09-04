import React, { useState } from "react";

// MemoFormProps型を定義
interface MemoFormProps {
  onSubmit: (content: string) => void;
}

// MemoFormコンポーネントを定義
export const MemoForm: React.FC<MemoFormProps> = ({ onSubmit }) => {
  const [content, setContent] = React.useState<string>("");

  // フォームの送信処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトの送信処理をキャンセル
    if (content.trim()) {
      // 入力値が空のみである場合は何もせず処理を終了
      onSubmit(content); // 親コンポーネントから渡されたonSubmit関数を実行
      setContent(""); // 入力値をリセット
    }
  };

  return (
    // TODO: フォームの送信処理を実装する
    <form action="">
      <input
        type="text"
        value={content} // input要素の値をcontent状態と同期
        onChange={(e) => setContent(e.target.value)} // 入力値が変更されたらcontent状態を更新
        placeholder="メモを入力"
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default MemoForm;
