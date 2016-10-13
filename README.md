# angular.fi

## angular2-mean-starter

This project is based from [angular2-mean-starter](https://github.com/jussikinnula/angular2-mean-starter) boilerplate.

Note! Remember to delete *typings* directory, since this project uses *npm @types* instead (earlier *typings* were used):

```
rm -rf typings
# or rimraf typings
```

## Additional dependencies

The project uses also Redis, so you need to install that locally:

### macOS & Homebrew

```
brew install redis
ln -sf /usr/local/opt/redis/homebrew.mxcl.redis.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

### Windows

Grab an installer or ZIP package from *Microsoft Open Tech group's* [Redis releases](https://github.com/MSOpenTech/redis/releases).
