<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use APP\Models\Tasks;

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
            // $request->session()->regenerate();

            return response()->json(['message' => 'user logged in']); 
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