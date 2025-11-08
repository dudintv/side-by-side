```jsx /title/ /isPublished/ /publishedAt/
interface Props {
  title: string
  isPublished?: boolean
  publishedAt?: Date
}

export default function ArticleCard({
  title,
  isPublished,
  publishedAt,
}: Props) {
  return (
    <>
      <h1>{title}{!isPublished && ' (draft)'}</h1>
      {
        publishedAt
          ? <span>{publishedAt.toString()}</span>
          : undefined
      }
    </>
  )
}
```

#### Using

```xml /title/ /isPublished/ /publishedAt/
<ArticleCard
  title="React"
  publishedAt={new Date()}
  isPublished
/>
```
