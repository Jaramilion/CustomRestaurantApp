import i18n, { TOptionsBase, InterpolationMap } from 'i18next';

const resolveTranslation = (path: string, key: string, textVariables?: (TOptionsBase & InterpolationMap<string>) | undefined): string =>
  i18n.t(`${path}${key}`,textVariables);


export {
  resolveTranslation
}