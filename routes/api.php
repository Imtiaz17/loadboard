<?php

use Illuminate\Http\Request;

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
Route::group([
    'middleware' => 'auth:api',
], function ($router) {
	 Route::get('/user','AuthController@userprofile');
});



Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login','AuthController@login');
Route::post('/logout','AuthController@logout');

//shipment
Route::apiResource('/shipment','ShippingController');
Route::apiResource('/seekshipment','SeekShipmentController');
Route::get('/myshipments/{user}','ShippingController@shipByUser');