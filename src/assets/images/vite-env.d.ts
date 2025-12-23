// Add this to your src/vite-env.d.ts or a new src/assets.d.ts file

/// <reference types="vite/client" />

// Declare modules for common image types
// This tells TypeScript that when you import files with these extensions,
// they will resolve to a string (which will be the URL of the image).
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.avif' {
  const content: string;
  export default content;
}