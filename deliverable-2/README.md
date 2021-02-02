# TEAM-17 Passages Centre for Self-Directed Learning

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective.
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?
 
 We plan to build a multi-platform application along with a website for teens who chose to take control of their own education to have a personal space to organize and present any creation of their interest. They can upload any medium of their work they are proud of but may not be recognized yet.  
 Students who are self-directed learners currently do not have a very organized and official way of showcasing their achievements. Thus they can use our website to create their portfolio to show exactly and diversely what they are capable of and how well-rounded they are.  
 Currently, students use Google Documents to show their work, which is not effective and time-consuming. This application can help teenagers to organize their work.

## Key Features
 * Described the key features in the application that the user can access.  
 * Provide a breakdown or detail for each feature that is most appropriate for your application  
 * This section will be used to assess the value of the features built  
 
 -Users can register  
 -Users can log in  
 -Users can set their profile  
 -Users can upload a file or a picture  
 -Users can get their files or delete their files
 -register: users need to provide username, password and email address to register. The account will not be created if the username or email already exists. After an account is created, username, password and email will be stored in MongoDb.  
 -log in: The user can login only if they input the correct username and password.  
 -set profile: Users can set or reset information like birthday and gender only if they are logged in. The new profile will be stored in MongoDb.  
 -up load a file: users can upload a picture or file only if they are logged in. Every file can have a name. The newly added file will be added to MongoDb.  
 Note an user cannot have two files of the same name.
 -get or delete file: Users can choose to get or delete a file if they are logged in. If they choose get, the content would be sent to them from MongoDb. If they choose to delete, the file will be removed from MongoDb.   

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
 To access the account, you first need to sign up an new account using the `SIGN UP` button, and then log in with your registered account with `LOG IN` button. 
Once you login, you can see your profile pages containning all your uploaded work (some are provided for you). You can set your profile info by clicking `setting` icon on the top right corner. 
You can view your photos, drwaings, videos by click different category buttons. To play a video,
click `Play Video` button (beta version).
To upload your photo, click `Upload Photos` button at top and follow the simple instruction to upload.
 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 
 First, **clone** our repo in your local computer and cd to deliverable-2.
To Test our **web application**, first download mongodb community version and start it base on your OS
- [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

lauch two terminal/cmd, one of them cd to /server and use `python3 server.py` to start server. 
The other one cd to /passages-centre, and use `npm install` to install all required pacakges. And use `npm start` to start the app.

For iOS deployment,  open Xcode and set the repository to /passages-centre/ios. Then you could build and run to test the app on iOS.
 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!
 
 After initialize the project but before we started, we first made a simple CI workflow to ensure everyone's code won't crash the project (detail at .github/workflows). So only the corrected version should be merging to the origin/master branch. It ensures the corrected merging won't affect other's code.

Our group member decided to use fork feature by git, meaning that everyone in our group fork the origin repo and set that repo's upstream to the origin master repo. So we can use `git pull upstream master` to update our forked repo and we can `git push` to the forked repo without checking and changing the origin master repo. After reviewing, we can use pull-request on github and the automated workflow will check whether it contains error. People who pull-request are responsible for mergin them and also resiponsible for the potential errors.

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 
 MIT license
 * What affect does it have on the development and use of your codebase?
 
 Anyone can have a copy of the codebase and is free to modify, publish or sell it. The only restriction is the license text should not be removed. 
 * Why did you or your partner make this choice?
 
Because the codebase is a practice in cs course, it's not for commercial, anyone is welcomed to use our work. The purpose of using this license is to show the author of the code.

