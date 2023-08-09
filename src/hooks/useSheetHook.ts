import React, {useRef} from 'react';

export const useSheetHook = () => {
  const sheetRef = useRef<any>(null);

  const handleSheetClose = React.useCallback(() => sheetRef?.current?.onClose(),[]);
  const handleSheetOpen = React.useCallback(() => sheetRef?.current?.onOpen(),[]);

  return [sheetRef, handleSheetOpen, handleSheetClose] as const;
};
