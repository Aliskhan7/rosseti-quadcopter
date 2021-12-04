<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Facades\Artisan;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('csrf', function() {
    return csrf_token();
});


// Fix

Route::get('/init', function () {
    Artisan::call('key:generate');
});

Route::get('/quadcopter-fix', function () {
    DB::table('quadcopters')->update(['img'=>'https://expovision.tech/assets/tmp/quadcopter-dark.png']);

    return 'картинабчки заменены';
});

Route::get('/fresh-db', function () {
    Artisan::call('migrate:fresh');
    Artisan::call('db:seed');
});
