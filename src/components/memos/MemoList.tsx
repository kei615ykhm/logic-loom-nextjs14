import React, { memo } from "react";
import { Memo } from "../../types";

interface MemoListProps {
  memos: Memo[];
}

export const MemoList: React.FC<MemoListProps> = ({ memos }) => {
  return (
    <ul>
      {/* メモのリストを表示 */}
      {memos.map((memo) => (
        <li key={memo.id}>{memo.content}</li>
      ))}
    </ul>
  );
};
