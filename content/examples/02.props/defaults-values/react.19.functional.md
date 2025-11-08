```jsx /= 'Hello'/ /= false/ / name: 'Guest' /
export default function MyComponent({
  greeting = 'Hello',
  isAdmin = false,
  user = { name: 'Guest' },
}: {
  greeting?: string
  isAdmin?: boolean
  user?: { name: string }
} = {}) {
  return (
    <div>
      <p>{greeting}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
      <p>User: {user.name}</p>
    </div>
  )
}
```
