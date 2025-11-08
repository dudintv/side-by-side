```jsx /status/ /rating/
type Status = 'draft' | 'published' | 'archived'

interface Props {
  title: string
  content: string | number
  status?: Status
  rating?: number
}

const validateProps = ({ status, rating }: Props) => {
  const errors: string[] = []

  if (status !== undefined) {
    if (!['draft', 'published', 'archived'].includes(status)) {
      errors.push(
        `Invalid status: "${status}".
        Must be one of: draft, published, archived`
      )
    }
  }

  if (rating < 0 || rating > 5) {
    errors.push(`Rating: ${rating} must be between 0 and 5`)
  }

  if (errors.length > 0) {
    console.warn('[Props Validation]', errors.join('\n'))
    if (process.env.NODE_ENV === 'development') {
      throw new Error(errors.join('\n'))
    }
  }
}

export default function BlogPost({
  title,
  content,
  status = 'published',
  rating,
}: Props) {
  validateProps({ title, content, status, rating })

  return (...)
}
```
