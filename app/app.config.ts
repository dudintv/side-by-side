export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'purple',
      neutral: 'zinc',
    },
    header: {
      slots: {
        root: 'bg-default/75 backdrop-blur border-b border-default h-[--ui-header-height] fixed top-0 z-50 w-full',
        container: 'flex items-center justify-between gap-3 max-w-auto w-full px-2 sm:px-4 md:px-6 lg:px-8',
        center: 'flex w-full items-center',
      },
    },
  },
});
