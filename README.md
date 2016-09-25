# NodeJS JWT Authentication sample

This is a NodeJS API that supports username and password authentication with JWTs.

## Available APIs

### User APIs

#### POST `/sessions/create`

You can do a POST to `/sessions/create` to log a user in.

The body must have:

* `username`: The username
* `password`: The password

It returns the following:

```json
{
  "access_token": {jwt}
}
```

The JWT is signed with the secret located at the `config.json` file. That JWT will contain the `username` and the `extra` information that you sent at signup time.#### POST `/sessions/create`

#### GET `/api/protected`

You can do a GET to `/api/protected` to ensure your token is valid.  It returns an empty `200` response if the token is still valid.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.