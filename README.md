# NodeRestBasic

1. Including CORS Support
2. Basic GET & POST

<br>

##### example client GET fetch request

```js
fetch('http://localhost:8080/feed/posts')
  .then(res => res.json())
  .then(resData => console.log(resData))
  .catch(err => console.error(err))
```

<br>

##### example client POST fetch request

```js
const header = {
  method: 'POST',
  body: JSON.stringify({
    title: 'example one',
    content: 'my first example',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
}
fetch('http://localhost:8080/feed/post', header)
  .then(res => res.json())
  .then(resData => console.log(resData))
  .catch(err => console.error(err))
```
