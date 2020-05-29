# react-ssr
react server side rendering example

## server
express server rendering app with renderToString and serving at \

## client
react client app, will get built to public and served by express static middleware

## steps to run -
```
npm run dev
```

### Notes - 

Separate Express server for serving the server side rendered application. It has route handler for * which serves HTML with react app content depending on the route.
react-dom/server renderToString - using this to get application HTML content which gets embedded withing react app root div (div with id 'root')
