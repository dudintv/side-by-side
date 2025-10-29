import type { FrameworkName, Frameworks } from '~/types';

export default function useSettings() {
  const hasLineNumbers = useState('hasLineNumbers', () => true);
  const frameworks = useState<Frameworks>('frameworks', () => {
    return {
      vue: {
        name: 'Vue',
        variants: ['Composition API'],
        versions: ['3.5'],
      },
      react: {
        name: 'React',
        variants: ['Functional components'],
        versions: ['19'],
      },
      angular: { name: 'Angular', versions: ['12'] },
    };
  });
  const currentFrameworks = useState<FrameworkName[]>(
    'currentFrameworks',
    () => ['react', 'vue']
  );
  const currentFrameworksAmount = computed(
    () => currentFrameworks.value.length
  );

  return {
    hasLineNumbers,
    frameworks,
    currentFrameworks,
    currentFrameworksAmount,
  };
}
