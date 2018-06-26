# hostname redirector
Lambda@Edge function for redirecting requests to another hostname

For example, a request to:

```
https://beta.phila.gov/departments/revenue/
```

Responds with a `301 Moved Permanently` redirect to:

```
https://www.phila.gov/departments/revenue/
```

Note that this function includes special logic to check if the original
request domain ends in `.website`, so that a request to `beta.phila.website` will be redirected to `www.phila.website`. This enables us to test this prior to go-live without having two separate lambda functions.

## Deployment
You can manually paste this into the Lambda console, deploy a new version,
and then associate the cloudfront distribution with the new version. Alternatively,
assuming `claudia.json` matches the function name and role you're targeting, use
[claudia.js](https://claudiajs.com/):

```
npx claudia update --version dev
npx claudia set-cloudfront-trigger --distribution-id XXXXXX --event-types origin-request --version dev
```
Claudia will convert `dev` to a numeric version number and tag the version with `dev`.
