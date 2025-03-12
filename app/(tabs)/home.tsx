import { ScrollableSafeAreaProvider } from "@/providers/scrollable-safe-area-provider";
import { TestScrollableWithData } from "@/features/text-scrollable-with-data/text-scrollable-with-data";

export default function HomeScreen() {
  return (
    <ScrollableSafeAreaProvider>
      <TestScrollableWithData />
    </ScrollableSafeAreaProvider>
  );
}
