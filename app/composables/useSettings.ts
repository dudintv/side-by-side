import type { FrameworkName, Frameworks } from '~/types';

export default function () {
  const isTypescript = useState('isTypescript', () => true);
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

  return { isTypescript, frameworks, currentFrameworks };
}
