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

## Deployment
You can manually paste this into the Lambda console, deploy a new version,
and then associate the cloudfront distribution with the new version. Alternatively,
assuming `claudia.json` matches the function name and role you're targeting, use
[claudia.js](https://claudiajs.com/):

```
npx claudia update --version VERSION_ALIAS
```

Replace `VERSION_ALIAS` with `phila-website` or `phila-gov` (convention for easy reference). Claudia will convert the version alias to a numeric version number and tag it.
