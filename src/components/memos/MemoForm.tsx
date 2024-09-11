import React, { useState } from "react";

/** MemoFormコンポーネントのプロパティの型定義 */
interface MemoFormProps {
  /**
   * フォーム送信時に呼び出される関数
   * @param content 送信されたメモの内容
   */
  onSubmit: (content: string) => void;
}

// MemoFormコンポーネントを定義
export const MemoForm: React.FC<MemoFormProps> = ({ onSubmit }) => {
  const [content, setContent] = React.useState<string>("");

  // フォームの送信処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトの送信処理をキャンセル
    const trimmedContent = content.trim();
    if (trimmedContent.length < 1) {
      // 入力された文字が1文字もない場合は何もせず早期リターン
      return;
    }
    onSubmit(trimmedContent); // 親コンポーネントから渡されたonSubmit関数を実行
    setContent(""); // 入力値をリセット
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content} // input要素の値をcontent状態と同期
        onChange={(e) => setContent(e.target.value)} // 入力値が変更されたらcontent状態を更新
        placeholder="メモを入力"
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 text-sm text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 focus:outline-none"
      >
        追加
      </button>
    </form>
  );
};
