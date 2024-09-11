import React, { useState } from "react";

/** MemoFormコンポーネントのプロパティの型定義 */
interface MemoFormProps {
  /**
   * フォーム送信時に呼び出される関数
   * @param content 送信されたメモの内容
   */
  onSubmit: (content: string) => void;
}

/**
 * メモを入力するためのフォームコンポーネント
 * @param props - コンポーネントのプロパティ
 * @param props.onSubmit - フォーム送信時に呼び出される関数
 */
export const MemoForm: React.FC<MemoFormProps> = ({ onSubmit }) => {
  /** メモの内容を管理するstate */
  const [content, setContent] = React.useState<string>("");

  /**
   * フォームの送信を処理する関数
   * @param e - フォーム送信イベント
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedContent = content.trim();
    if (trimmedContent.length < 1) {
      return;
    }
    onSubmit(trimmedContent);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/**
       * メモ入力用のテキストフィールド
       * @remarks
       * - `value`: input要素の値をcontent状態と同期
       * - `onChange`: 入力値が変更されたらcontent状態を更新
       */}
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メモを入力"
      />
      {/**
       * メモ追加ボタン
       * @remarks
       * - `type="submit"`: フォームの送信をトリガー
       */}
      <button
        type="submit"
        className="ml-4 px-4 py-2 text-sm text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 focus:outline-none"
      >
        追加
      </button>
    </form>
  );
};
