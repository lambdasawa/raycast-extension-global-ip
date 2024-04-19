import { Clipboard, MenuBarExtra } from "@raycast/api";
import { useFetch } from "@raycast/utils";

export default function Command() {
  const { isLoading, data, revalidate } = useFetch("https://checkip.amazonaws.com/");

  const globalIP = String(data).trim();

  const lastUpdated = `Updated at: ${new Date().toLocaleTimeString()}`;

  return (
    <MenuBarExtra isLoading={isLoading} title={globalIP}>
      <MenuBarExtra.Item title={lastUpdated} onAction={() => revalidate()} />
      <MenuBarExtra.Item title={globalIP} onAction={() => Clipboard.copy(globalIP)} />
    </MenuBarExtra>
  );
}
