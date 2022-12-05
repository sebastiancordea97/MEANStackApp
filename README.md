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
    4. We can change the selector in NG ex from 'app-component' -> '[app-component]' and nou this selects a html attribute not an element or even classes
    5. Databinding = comunication between template and business logic (code)
        a. String interpolation {{ data }}
        b. Property binding [property]='data'
        c. Event binding <- (event)="expression"
        d. Two way databinding [(ngModel)]="data"

    Bindable Properties and Events
        How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.
        Important: For events, you don't bind to onclick but only to click (=> (click)).
        The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

    Important: 
        For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive.
        This is done by adding the FormsModule  to the imports[]  array in the AppModule.
        You then also need to add the import from @angular/forms  in the app.module.ts file:
        import { FormsModule } from '@angular/forms'; 