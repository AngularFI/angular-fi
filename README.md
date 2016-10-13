# angular.fi

## The project

This project is based from [angular2-mean-starter](https://github.com/jussikinnula/angular2-mean-starter) boilerplate. Please read instructions how to setup things with that, and then continue here with the additional dependencies.

## Additional dependencies

The project has an extra dependency for [Redis](http://redis.io/). You need to install that locally in order to use the project.

### Install Redis on macOS with Homebrew

```
brew install redis
ln -sf /usr/local/opt/redis/homebrew.mxcl.redis.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

### Install Redis on Windows

Grab an installer or ZIP package from *Microsoft Open Tech group's* [Redis releases](https://github.com/MSOpenTech/redis/releases).
