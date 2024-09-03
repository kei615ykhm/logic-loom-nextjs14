export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  return { memos };
};
