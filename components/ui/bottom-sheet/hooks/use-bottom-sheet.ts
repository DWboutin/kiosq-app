import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useBottomSheet = () => {
  const ref = useRef<BottomSheetModal>(null);

  const present = useCallback(() => {
    ref.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    ref.current?.dismiss();
  }, []);

  const snapToIndex = useCallback((index: number) => {
    ref.current?.snapToIndex(index);
  }, []);

  return {
    ref,
    present,
    dismiss,
    snapToIndex,
  };
};
