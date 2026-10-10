"use client";

import { useI18n, type StringKey } from "@/i18n";

/** Renders a dictionary entry while keeping the surrounding page server-rendered. */
export function LocalizedText({ id }: { id: StringKey }) {
  const { t } = useI18n();
  return <>{t(id)}</>;
}
