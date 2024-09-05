import React from "react";
import { Memo } from "../../types";

interface MemoListProps {
  memos: Memo[];
}

export const MemoList: React.FC = () => {
  return (
    <ul>
      {/* メモのリストを表示 */}
      <li>サンプルメモ</li>
    </ul>
  );
};
