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

The use of a cookie for authentication is particularly well-suited for the
following scenarios:

  - Traditional web applications that perform most of the application logic on
    the server, and respond to user input submitted via HTML forms.
  - Single-page applications (SPAs) that use of client-side JavaScript to render
    the user interface (UI) and call backend APIs on the _same_ [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin).

The Authnomicon project uses [Passport](https://www.passportjs.org/) as an
authentication framework.  Web-based authentication schemes are provided by
Authnomicon's [authentication](https://github.com/authnomicon/.github#authentication)
packages.  The authentication session is initiated upon the user authenticating
with one of these schemes.  Passport's default session manager is replaced by
the implementation from [`passport-multilogin`](https://github.com/jaredhanson/passport-multilogin),
allowing simultaneous login to multiple accounts.

<div align="right">
  <sup>Developed by <a href="#authors">Jared Hanson</a>.</sub>
</div>

## Authors

- [Jared Hanson](https://www.jaredhanson.me/) { [![WWW](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/globe-12x12.svg)](https://www.jaredhanson.me/) [![Facebook](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/facebook-12x12.svg)](https://www.facebook.com/jaredhanson) [![LinkedIn](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/linkedin-12x12.svg)](https://www.linkedin.com/in/jaredhanson) [![Twitter](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/twitter-12x12.svg)](https://twitter.com/jaredhanson) [![GitHub](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/github-12x12.svg)](https://github.com/jaredhanson) }

## License

[The MIT License](https://opensource.org/licenses/MIT)

Copyright (c) Jared Hanson
