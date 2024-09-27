import { v4 } from 'uuid';
import { memoSchema, Memo } from '../schemas/memoSchema';

describe('UUID Generation', () => {
  test('v4 generates a valid UUID', () => {
    const newUuid = v4();
    const newMemo: Memo = {
      id: newUuid,
      content: 'Test memo',
      createdAt: new Date().toISOString(),
    };

    const result = memoSchema.safeParse(newMemo);
    expect(result.success).toBe(true);

    if (result.success) {
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuidRegex.test(newMemo.id)).toBe(true);
    }
  });

  test('uuidv4 (alias) generates a valid UUID', () => {
    const { v4: uuidv4 } = require('uuid'); // CommonJS形式でのインポート
    const newUuid = uuidv4();
    const newMemo: Memo = {
      id: newUuid,
      content: 'Test memo with uuidv4',
      createdAt: new Date().toISOString(),
    };

    const result = memoSchema.safeParse(newMemo);
    expect(result.success).toBe(true);

    if (result.success) {
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuidRegex.test(newMemo.id)).toBe(true);
    }
  });
});
