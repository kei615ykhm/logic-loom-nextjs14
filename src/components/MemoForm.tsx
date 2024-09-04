import React, { useState } from "react";

export const MemoForm: React.FC = () => {
  const [content, setContent] = React.useState<string>("");

  return (
    // TODO: フォームの送信処理を実装する
    <form action="">
      <input type="text" value={content} placeholder="メモを入力" />
      <button type="submit">追加</button>
    </form>
  );
};

export default MemoForm;
