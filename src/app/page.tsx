'use client';

import MemoForm from '../components/shared/MemoForm';
import { MemoList } from '../components/shared/MemoList';
import { useCreateMemo } from '../features/createMemo/useCreateMemo';
import { useDeleteMemo } from '../features/deleteMemo/useDeleteMemo';

function Home() {
  const { memos, handleAddMemo } = useCreateMemo();
  const { handleDeleteMemo } = useDeleteMemo();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-8">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Logic Loam
        </h1>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <MemoForm onSubmit={handleAddMemo} />
          </div>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-5">
          <div className="p-6">
            <MemoList memos={memos} onDelete={handleDeleteMemo} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
