# GdscSnt

![image](https://github.com/gdsc-mst/gdsc-snt/assets/162060080/7aec837d-0ef5-4581-aca6-b6b3aed33a53)

**Based on the** [**Figma Design**](https://www.figma.com/file/vif9nwFKqUAhMKTYSAHMAH/Google-Club?type=design&node-id=0%3A1&mode=design&t=LSdiimwZSOveIZmP-1)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Contributing
First step to contributing is getting the project running on your machine. The following steps are done in vscode, but can mostly be followed in your IDE of choice.
Open the terminal in vscode by doing terminal->new terminal or with keyboard shortcut: 
> ctrl + shift + `

Once in the terminal, install the Angular command line utility:
> npm install -g @angular/cli

We will now clone the project. Ensure you are in the directory you would like the project to be cloned to.
> git clone https://github.com/Google-Developer-Student-Club-MST/gdsc-snt.git

Open the folder in the current vscode window (-r reuses current window). NOTE: Include the period in the below command
> code -r .

Open the vscode terminal back up and run:
> ng serve

Open the [localhost link](http://localhost:4200/)

To begin working on a contribution, please first pull from the remote repo to ensure you are working on the latest version. Then, switch to a new branch and begin working:
> git checkout -b [branch_name]

Many contributions will require creating a new component. To generate the boilerplate for a new component, run the following command:
> ng generate component [name_of_component]

This will create a new component folder of the name you specified. Please ensure all components are moved to the src/app/components directory. If preferred, you can generate directly to the components folder by adding the directory before the name of the new component
> ng generate component components/[name_of_component]

You can now use the newly generated component files to do your work. To test your work, you will need to import the new component
to the page you are working on. Currently, there are three pages ('/' for home, '/events' for events, and '/portfolio' for portfolio).
Go to the src/app/pages directory and open the page component for the page you are working on. To add your component to this page
component, you will need to import your component to the page component.
For example, to add the Landing Component, the src/app/pages/home/home.component.ts file originally looked like this:
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
```

I then added this line:
> import { LandingComponent } from '../../components/landing/landing.component';

and modified this line to add NavbarComponent:
> imports: [LandingComponent],

The app.component.ts file then looked like this:
```ts
import { Component } from '@angular/core';
import { LandingComponent } from '../../components/landing/landing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
```

Then, you simply need to instantiate your component in the page .html file.
For example, with the landing component, the src/app/pages/home.component.html originally was empty. So I added the following line:
> <app-landing></app-landing>

To add your component, simply add the component by writing <app-[your_component_name]></app-[your_component_name]>

Once you are done making changes, you should check that you are on the correct branch by running:
> git branch

Then, stage your changes for commit:
> git add .

Then, commit your changes:
> git commit -m "Your descriptive commit message"

Finally, push your changes:
> git push

If you recieve an error about the upstream, simply rerun the push command with the following:
> git push --set-upstream origin [branch_name]

You should then go to the remote repo on github (this page!) and hit compare branches. You can then create a pull request to start the process of merging your changes into our main branch.
Once we have a chance to review your changes, we will complete the merge.

You have successfully contributed to the project!

## Using git for version control
Quick cheat sheet:
```
Note that square brackets indicate a field you need to specify.
For example, in git clone you must specify the [url] yourself without the square brackets.
----
git clone [url]
Pulls down a remote repository and creates a local repository
----
git status
Lists any modified files, files staged for commit, and commits differing between the local and remote repo.
----
git pull
Pulls down any changes from the remote repository
----
git checkout -b [branch_name]
Creates a new branch and switches to it
----
git switch [branch_name]
Switches to the named branch
----
git branch
Lists the branches and specifies which branch you are currently on
----
git fetch
Pulls down branches from the remote repository
----
git add .
Stages all modified files for commit. The '.' can be replaced with folders or individual files
----
git commit -m "Your descriptive commit message"
Commits your staged changes with the specified commit message
----
git push
Pushes local commits to the remote repo.
----
git push --set-upstream origin [branch_name]
Pushes local commits to the remote repo specifying the remote branch to push to.
----
git stash
Restores project to unaltered state while saving the current changes. Useful
for when you accidentally do your work on the wrong branch and need to transfer it.
----
git stash apply
Places your previously saved changes into your current branch. Used after using git stash
----
```
