# Firebase onAuthStateChanged unsubscribe memory leak
This repository demonstrates a common error when using Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.
The `onAuthStateChanged` function returns an unsubscribe function that must be called when the listener is no longer needed to prevent memory leaks.  Failure to do so will result in the listener continuing to run indefinitely, consuming resources.

## How to reproduce
1.  Clone this repository.
2.  Ensure you have the Firebase JavaScript SDK installed.  (npm install firebase)
3.  Replace the placeholder Firebase configuration with your actual configuration.
4.  Run the application. You'll see log messages indicating the authentication state. Note that the log messages will persist indefinitely. 
5.  To fix the issue, run the solution file.

## Solution
The solution is simply to call the unsubscribe function when the component or the listener is no longer needed.