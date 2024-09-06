"use client";

// TODO: MemoFormとMemoListコンポーネントを作成する
import { MemoForm } from "../components/memos/MemoForm";
import { MemoList } from "../components/memos/MemoList";
import { useMemos } from "../hooks/useMemos";

export default function Home() {
  const { memos, addMemo, deleteMemo } = useMemos();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-8">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Logic Loam
        </h1>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <MemoForm onSubmit={addMemo} />
          </div>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <MemoList memos={memos} onDelete={deleteMemo} />
          </div>
        </div>
      </main>
    </div>
  );
}
