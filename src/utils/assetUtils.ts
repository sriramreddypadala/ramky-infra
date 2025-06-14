
/**
 * Helper function to get correct asset path in both dev and prod
 * @param path - The path to the asset (relative to public folder)
 * @returns The correct path to the asset based on the environment
 */
const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  console.log('Getting asset path for:', cleanPath);
  console.log('Environment:', import.meta.env.MODE);
  
  // In development, use absolute paths (served from public folder)
  if (import.meta.env.DEV) {
    const devPath = `/${cleanPath}`;
    console.log('Dev path:', devPath);
    return devPath;
  }
  
  // In production, use relative paths (assets are in the same directory as index.html)
  const prodPath = `./${cleanPath}`;
  console.log('Production path:', prodPath);
  
  return prodPath;
};

export { getAssetPath };
