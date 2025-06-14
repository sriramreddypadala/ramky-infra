
/**
 * Helper function to get correct asset path in both dev and prod
 * @param filename - The filename (e.g., 'logo.png', 'video.mp4')
 * @returns The correct path to the asset based on the environment
 */
const getAssetPath = (filename: string): string => {
  // Remove any leading slashes or paths, just use the filename
  const cleanFilename = filename.split('/').pop() || filename;
  
  console.log('Getting asset path for:', cleanFilename);
  console.log('Environment:', import.meta.env.MODE);
  
  // In development, use absolute paths (served from public folder)
  if (import.meta.env.DEV) {
    const devPath = `/${cleanFilename}`;
    console.log('Dev path:', devPath);
    return devPath;
  }
  
  // In production, use relative paths (assets are in the same directory as index.html)
  const prodPath = `./${cleanFilename}`;
  console.log('Production path:', prodPath);
  
  return prodPath;
};

export { getAssetPath };
