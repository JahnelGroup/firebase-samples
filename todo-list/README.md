JavaScript/Firebase Todo List
===================================

## Firebase
This project requires that you have the Firebase Tools installed. Instructions for doing so can be found here: 
https://firebase.google.com/docs/cli/. Follow the instructions to install and log in. With npm on \**nix you can simply do this:

```bash
$ npm install -g firebase-tools
$ firebase login
```

A browser will pop-up where you can authenticate with a Google account. 

### Create Firebase Database
You'll need to create a Firebase project and associate it with in your console, start by navigating to https://console.firebase.google.com/. After creating the project, click the **Develop** then **Database**, then choose **Cloud Firestore**, and then select **Start in test mode**. 

### Associate it with in your console 
Make sure that you're in this project repo's root directory. First list your projects, you should see the one that you created earlier.

```bash
$ firebase list
┌─────────────┬───────────────────────┬─────────────┐
│ Name        │ Project ID / Instance │ Permissions │
├─────────────┼───────────────────────┼─────────────┤
│ hello-world │ hello-world-9b82d     │ Owner       │
└─────────────┴───────────────────────┴─────────────┘
```

Now associate it with the Project ID:

```bash
$ firebase use hello-world-9b82d
Now using project hello-world-9b82d
```

## Run

You may then run it locally with 
`$ firebase serve`

Or deploy it with
`$ firebase deploy`
