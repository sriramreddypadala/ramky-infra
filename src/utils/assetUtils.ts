
/**
 * Helper function to get correct asset path for static hosting
 * @param filename - The filename (e.g., 'logo.png', 'video.mp4')
 * @returns The correct path to the asset
 */
const getAssetPath = (filename: string): string => {
  // Clean the filename - remove any path separators and use only the filename
  const cleanFilename = filename.split('/').pop() || filename;
  
  // Always use absolute paths from root for static hosting
  return `/${cleanFilename}`;
};

export { getAssetPath };
