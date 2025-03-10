import { ImageLoaderProps } from "next/image";

export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const imageLoader = (
  { src, width, quality }: ImageLoaderProps,
) => {
  return `${src}?w=${width}&q=${quality || 75}`
}