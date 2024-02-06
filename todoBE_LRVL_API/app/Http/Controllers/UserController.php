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
        return response()->json(['message' => $request]);
    }   

    public function register(Request $request){
        // Sanitize data to prevent forgery
        
        
        $user = new User;

        $creds = $request->only('email', 'name', 'password');

        $user->email = $creds['email'];
        $user->username = $creds['name'];
        $user->password = $creds['password'];
        $user->role = 'role';
        $user->phone = 'phone';
        $user->remember_token = 'temp';

        $user->save();

        // Testing with postman if entered request data is reaching the backend. worked
        return response()->json(['message' =>'reached backend']);
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