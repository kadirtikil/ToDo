<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// User related Routes
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

// Using middleware to protect from unauthorized activity. 
// Using functionalities not possible without currently active session by using web, auth middleware.
Route::middleware(['web', 'auth'])->group( function() {
    // Logout should only work if a session is running
    Route::post('/logout', [UserController::class, 'logout']);

    // Task related Routes
    Route::put('/edit/{taskToEdit}', [UserController::class, 'editTask']);
    Route::delete('/deletetask/{id}', [UserController::class, 'deleteTask']);
});    

Route::get('/fetchtasks', [UserController::class, 'fetchData']);
Route::post('/createtask', [UserController::class, 'createTask']);

Route::get('/test', [UserController::class, 'testFunc']);