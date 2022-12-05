# MEANStackApp
Personal MEAN Stack project to test and train

1. Typescrypt
    1. yarn add typescript
    2. tsc 'filename; or tsc --watch 'filename' #to run a file
    3. tsc --init #creates a config file for typescript
        -  "outDir": "./dist",  to move transpiled js in dist folder

2. Angular
    1. index.html is the file that is served to the browser
    2. main.ts import app.module.ts and then serves it to platformBrowserDynamic().bootstrapModule(AppModule)
        to be able to boostrap all our declaired modules
    3. @ is the initializer of a "Decorator" ex @Component    