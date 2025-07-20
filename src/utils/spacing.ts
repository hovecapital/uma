import type { Theme } from '../types/theme.types';

export const getSpacingValue = (
  spacing: keyof Theme['spacing'] | number,
  theme: Theme
): number => {
  if (typeof spacing === 'number') {
    return spacing;
  }
  return theme.spacing[spacing];
};