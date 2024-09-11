import React from "react";
import { Memo } from "../../types";

/** MemoListコンポーネントのプロパティの型定義 */
interface MemoListProps {
  /** メモの配列 */
  memos: Memo[];
  /**
   * メモ削除のための関数
   * @param id 削除するメモのID
   */
  onDelete: (id: string) => void;
}

/**
 * メモのリストを表示し、各メモの削除機能を提供するコンポーネント
 * @param props - コンポーネントのプロパティ
 * @param props.memos - 表示するメモの配列
 * @param props.onDelete - メモを削除するための関数
 */
export const MemoList: React.FC<MemoListProps> = ({ memos, onDelete }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {memos.map((memo) => (
        <li
          key={memo.id}
          className="py-4 px-6 flex items-center justify-between hover:bg-gray-50"
        >
          {memo.content}
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
