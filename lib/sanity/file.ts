type SanityFileAsset = {
  url?: string;
};

type SanityFile = {
  asset?: SanityFileAsset;
};

export function getFileUrl(
  file: SanityFile | null | undefined,
): string | undefined {
  return file?.asset?.url;
}
