import React, { memo } from "react";
import { Memo } from "../../types";

// MemoListPropsコンポーネントのプロパティの型定義
interface MemoListProps {
  memos: Memo[]; // メモの配列
  onDelete: (id: string) => void; // メモ削除のための関数
}

// MemoListコンポーネントを定義
export const MemoList: React.FC<MemoListProps> = ({ memos, onDelete }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {/* メモのリストを表示 */}
      {memos.map((memo) => (
        <li
          key={memo.id}
          className="py-4 px-6 flex items-center justify-between hover:bg-gray-50"
        >
          {memo.content}
          {/* メモ削除ボタンを表示し、クリック時にonDelete関数を呼び出す */}
          <button
            onClick={() => onDelete(memo.id)}
            className="ml-4 px-4 py-2 text-sm text-white bg-red-500 border border-red-500 rounded hover:bg-red-700 hover:border-red-700 focus:outline-none"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
};
