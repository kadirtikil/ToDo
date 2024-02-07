<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use APP\Models\Tasks;

class UserController extends Controller
{
    // User related methods
    public function login(Request $request){
        // Sanitize data to prevent forgery

        if(!User::find($request->email)){
            return response()->json(['message' => 'User not found tho']);
        }

        return response()->json(['message' => $request]);
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
        $user->password = $creds['password'];
        $user->role = 'role';
        $user->phone = 'phone';
        $user->remember_token = 'temp';

        $user->save();

        // Testing with postman if entered request data is reaching the backend. worked
        return response()->json(['message' => 'User registered']);
    }

    public function logout(){
        return response()->json(['message' => 'logout']);
    }
    // NOTE: return response()->json(['message' => $request]); these statements serve testing purposes to check,
    // if the routing is working.



    // Task related methods
    public function createTask(Request $request){
        return response()->json(['message' => $request]);
    }

    public function editTask(Request $request){
        return response()->json(['message' => $request]);
    }

    public function deleteTask(Request $request){
        return response()->json(['message' => $request]);
    }


}