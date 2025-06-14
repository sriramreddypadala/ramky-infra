
/**
 * Helper function to get correct asset path in both dev and prod
 * @param path - The path to the asset (relative to public folder in production)
 * @returns The correct path to the asset based on the environment
 */
const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  console.log('Getting asset path for:', cleanPath);
  console.log('Environment:', import.meta.env.MODE);
  
  // In development, use the path as is (handled by Vite dev server)
  if (import.meta.env.DEV) {
    const devPath = `/${cleanPath}`;
    console.log('Dev path:', devPath);
    return devPath;
  }
  
  // In production, try multiple possible paths
  const prodPaths = [
    `./${cleanPath}`,
    `/${cleanPath}`,
    `./assets/${cleanPath}`,
    `/assets/${cleanPath}`
  ];
  
  console.log('Production paths to try:', prodPaths);
  
  // Return the first path for now, but log all possibilities
  const selectedPath = `./${cleanPath}`;
  console.log('Selected path:', selectedPath);
  
  return selectedPath;
};

export { getAssetPath };
