```jsx /userPath/ /userId/
export function UserLink({ userId }) {
  const userPath = useMemo(() => `/users/${userId}`, [userId]);

  return <a href={userPath}>Go to user {userId}</a>;
}
```
