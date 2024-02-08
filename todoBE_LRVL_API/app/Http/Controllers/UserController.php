<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Tasks;

class UserController extends Controller
{
    // User related methods
    public function login(Request $request){

        $creds = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string|max:255',
        ]);

        // Attempt the login of the user.
        if(Auth::attempt($creds)){
            $request->session()->regenerate();

            return response()->json(['message' => Auth::user()->id]);  
        }

        return response()->json(['message' => 'Log in not possible. Check Credentials.']);
    }   

    public function register(Request $request){
        // get credentials out of request body
        $creds = $request->validate([
            'role' => 'string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|max:255',
            'phone' => 'string|max:255',
        ]);


        // check if mail already exists in DB
        // couldve checked with unique:users in the validation above, but somehow it lead to the welcome blade file.
        // im guessing thats eloquent/illuminate jumping in.
        if (User::where('email', $creds['email'])->exists()) {
            return response()->json(['message' => 'User already exists']);
        }


        // csrf token already set in form , no need to sanitize request
        // using eloquent model to save user, no need to check for injection
        $user = new User;
        $user->email = $creds['email'];
        $user->username = $creds['name'];
        $user->password = Hash::make($creds['password']);
        $user->role = 'role';
        $user->phone = 'phone';
        $user->remember_token = 'temp';

        $user->save();

        // Testing with postman if entered request data is reaching the backend. worked
        return response()->json(['message' => 'User registered']);
    }

    public function logout() {
        $user = Auth::user();

        Auth::logout();

        // Return redirect to starter page.
        return response()->json(['message' => $user]);
    }
    // NOTE: return response()->json(['message' => $request]); these statements serve testing purposes to check,
    // if the routing is working.



    // Task related methods
    public function createTask(Request $request){

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:1000',
            'status' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'deadline' => 'required|date',
        ]);


        // Check if a user is logged in atm
        if(Auth::check()) {
            // Check if Task already exists, and has the same user
            if(User::where('title', $creds['title'])->where('author_id', Auth::user()->id)->exists()) {
                return response()->json(['message' => 'Task already exists.']);
            } 
        } 
        else {
            return response()->json(['msg' => 'No User logged in atm']);
        }

        // Else create a new task instance and save it.
        // Create the new task if it doesnt exist.
        $task = new Tasks;

        // $task->author_id = $currentUser;
        $task->title = $data['title'];
        $task->body = $data['body'];
        $task->status = $data['status'];
        $task->category = $data['category'];
        $task->deadline = $data['deadline'];
        $task->author_id = Auth::user()->id;
        $task->save();

        return response()->json(['message' => $request]);
    }

    public function editTask(Request $request, $taskToEdit){

        // validate data
        $data = $request->validate([
            'title' => 'required|max:255',
            'body' => 'required',
            'deadline' => 'required|date',
            'status' => 'required|string',
            'category' => 'required|string',
        ]);

        if(Auth::check()){
            Tasks::where('id', $taskToEdit)->where('author_id', Auth::user()->id)->update([
            'title' => $request['title'], 
            'body' => $request['body'], 
            'deadline' => $request['deadline'],
            'status' => $request['status'],
            'category' => $request['category']]);

            return response()->json(['msg' => 'task updated']);
        }

        return response()->json(['msg' => 'task couldnt be updated for whatever']);
    }

    public function deleteTask($id){

        if(Auth::check()){
            Tasks::where('id', $id)->delete();
            return response()->json(['message' => $id, 'request' => $request]);
        }

        return response()->json(['msg' => 'couldnt delete task. log in & try again.']);
    }


}