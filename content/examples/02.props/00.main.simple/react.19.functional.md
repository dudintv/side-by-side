```jsx
function MyReactComponent(props) {
  const { name, mark } = props;

  return (
    <h1>
      Hello {name}
      {mark}
    </h1>
  );
}

MyReactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  mark: PropTypes.string,
};
MyReactComponent.defaultProps = {
  mark: '!',
};
```

#### Using

```html
<MyReactComponent name="world" />
```
