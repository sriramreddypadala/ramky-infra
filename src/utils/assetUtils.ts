
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
  console.log('Base URL:', import.meta.env.BASE_URL);
  
  // For Netlify and other static hosts, always use absolute paths from root
  const path = `/${cleanFilename}`;
  console.log('Asset path:', path);
  
  return path;
};

export { getAssetPath };
