import type { Theme, DeepPartial } from '@/types/theme.types';

export const mergeTheme = (baseTheme: Theme, customTheme: DeepPartial<Theme>): Theme => {
  const merged = { ...baseTheme };

  const deepMerge = (target: Record<string, unknown>, source: Record<string, unknown>): void => {
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        if (targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
          deepMerge(targetValue as Record<string, unknown>, sourceValue as Record<string, unknown>);
        } else {
          target[key] = sourceValue;
        }
      } else {
        target[key] = sourceValue;
      }
    });
  };

  deepMerge(merged as unknown as Record<string, unknown>, customTheme as Record<string, unknown>);

  return merged;
};
