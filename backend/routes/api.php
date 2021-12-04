<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\QuadcopterController;
use App\Http\Controllers\UserController;
use \App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

const PUBLIC_ACTIONS = ['index', 'show'];
const SECURE_ACTIONS = ['update', 'destroy', 'store'];

Route::post('login', [AuthController::class, 'signIn'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('logout', [AuthController::class, 'signOut']);

    Route::resource('course', CourseController::class);
    Route::resource('video', VideoController::class);
    Route::resource('quadcopter', QuadcopterController::class);

    // LAYOUT: Profile
    Route::get('profile', [UserController::class, 'getProfile']);

//    Route::prefix('quadcopter')->group(function () {
        // LAYOUT: All models
        // -> INDEX in resource

        // LAYOUT: Compare, Train mode
        // -> SHOW in resource
        Route::get('list', [QuadcopterController::class, 'getList']);

        // LAYOUT: Models
        Route::get('get_index_random', [QuadcopterController::class, 'getIndexRandom'])->name('index');
//    });

//    Route::prefix('course')->group(function () {
        // LAYOUT: Courses
        // -> INDEX in resource

        // LAYOUT: Courses page
        // -> SHOW in resource
//    });
});
