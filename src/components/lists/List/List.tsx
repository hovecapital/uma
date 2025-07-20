import React from 'react';
import { FlashList } from '@shopify/flash-list';
import type { ListProps } from '@/types/component.types';

export function List<T>({
  data,
  renderItem,
  keyExtractor,
  ItemSeparatorComponent,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  onRefresh,
  refreshing = false,
  onEndReached,
  onEndReachedThreshold = 0.5,
  horizontal = false,
  numColumns = 1,
  columnWrapperStyle: _columnWrapperStyle,
  contentContainerStyle,
  estimatedItemSize = 50,
  style,
  ...rest
}: ListProps<T>): React.ReactElement {
  return (
    <FlashList
      data={data}
      renderItem={({ item, index }) => renderItem(item, index)}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      horizontal={horizontal}
      numColumns={numColumns}
      estimatedItemSize={estimatedItemSize}
      contentContainerStyle={contentContainerStyle}
      style={style}
      {...rest}
    />
  );
}
