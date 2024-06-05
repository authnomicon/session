# @authnomicon/session

Session management components for the Authnomicon project.

`@authnomicon/session` is a set of components for maintaining authentication
context during a login session to a web application.

The authentication context is persisted using [`express-session`](https://github.com/expressjs/session),
which stores session data server-side in [Redis](https://redis.io/) (via
[`connect-redis`](https://github.com/tj/connect-redis)), [memcached](https://memcached.org/)
(via [`connect-memcached`](https://github.com/balor/connect-memcached)), or
another compatible [session store](https://github.com/expressjs/session#compatible-session-stores).

A session ID [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
is set by `express-session`, which is transmitted back by the user's web browser
on later requests.  This cookie is a token which is used to look up the
associated authentication context, which is then used to authorize requests.

<div align="right">
  <sup>Developed by <a href="#authors">Jared Hanson</a>.</sub>
</div>

## Authors

- [Jared Hanson](https://www.jaredhanson.me/) { [![WWW](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/globe-12x12.svg)](https://www.jaredhanson.me/) [![Facebook](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/facebook-12x12.svg)](https://www.facebook.com/jaredhanson) [![LinkedIn](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/linkedin-12x12.svg)](https://www.linkedin.com/in/jaredhanson) [![Twitter](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/twitter-12x12.svg)](https://twitter.com/jaredhanson) [![GitHub](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/github-12x12.svg)](https://github.com/jaredhanson) }

## License

[The MIT License](https://opensource.org/licenses/MIT)

Copyright (c) Jared Hanson
