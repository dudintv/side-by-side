export type FrameworkName = 'vue' | 'react' | 'angular';
export type FrameworkMeta = {
  name: string;
  variants?: string[];
  versions: string[];
};
export type Frameworks = Record<FrameworkName, FrameworkMeta>;
