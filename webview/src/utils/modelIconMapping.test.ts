import { describe, expect, it } from 'vitest';
import { resolveIconVendor, resolveModelVendor } from './modelIconMapping';

describe('modelIconMapping', () => {
  it('keeps Codex Spark variants on the OpenAI icon', () => {
    expect(resolveModelVendor('gpt-5.3-codex-spark')).toBe('openai');
    expect(resolveIconVendor('codex', 'gpt-5.3-codex-spark')).toBe('openai');
  });

  it('still matches dedicated Spark vendor model ids', () => {
    expect(resolveModelVendor('spark-max')).toBe('spark');
    expect(resolveIconVendor(undefined, 'spark-lite')).toBe('spark');
  });
});
