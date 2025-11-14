```jsx /isDarkMode/
export function App() {
  const [userPreferences, setUserPreferences] = useState({
    theme: 'light', // default theme
  });

  const isDarkMode = useMemo(() => 
    userPreferences.theme === 'dark',
    [userPreferences.theme]
  );

  const setTheme = (event) => {
    setUserPreferences((prev) => ({
      ...prev,
      theme: event.target.checked ? 'dark' : 'light',
    }));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={setTheme}
        />
        Enable Dark Mode
      </label>
      <p>Theme: {userPreferences.theme}</p>
    </div>
  );
}
```
