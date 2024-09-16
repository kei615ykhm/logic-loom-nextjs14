import React, { useState } from "react";

interface MemoFormProps {
  onSubmit: (content: string) => void;
}

/** フォーム送信時に呼び出されるコールバック関数 */
export default function MemoForm({
  onSubmit,
}: MemoFormProps): React.ReactElement {
  const [content, setContent] = React.useState<string>("");

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
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
}
