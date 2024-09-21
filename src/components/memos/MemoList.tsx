import React from 'react';
import { Memo } from '../../schemas/memoSchema';
interface MemoListProps {
  memos: Memo[];
  onDelete: (id: string) => void;
}

export const MemoList: React.FC<MemoListProps> = ({ memos, onDelete }) => {
  /** メモ削除のためのコールバック関数 */
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
