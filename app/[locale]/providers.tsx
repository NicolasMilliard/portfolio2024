import { I18nProviderClient } from '@app/locales/client';
import type { PropsWithChildren } from 'react';

export const Providers = ({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
