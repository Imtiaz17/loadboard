<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required',
            'email'=>'email|required',
            'password'=>'required|confirmed'
        ]);
        $validateData['password']=bcrypt($validateData['password']);
        $user= User::create($validateData);
        $accessToken= $user->createToken('authToken')->accessToken;
        return response()->json(['user'=>$user,'access_token'=>$accessToken]);
    }
    public function login(Request $request)
    {
        $loginData="";
         $login = $request->email;
         $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
         request()->merge([$field => $login]);
          if ( $field=='username') {
             $loginData=$request->validate([
            'username'=>'required',
            'password'=>'required'
        ]);

          }
           else if($field=='email')
         {
             $loginData=$request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);

         }

        if(!auth()->attempt($loginData)){
            return response()->json(['message' => 'Unauthorized'], 422);
        }
       
         $user="";
         if ( $field=='username') {
             $user=User::where('username',$request->username)->first();
         }
         else if($field=='email')
         {
             $user=User::where('email',$request->email)->first();
         }
       
        $accessToken=$user->createToken('authToken');

        return response()->json([
            'access_token'=>$accessToken->accessToken,
            'expires_at' => Carbon::parse(
            $accessToken->token->expires_at
            )->toDateTimeString()
            ]);
        
    }


    public function logout () {

        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    
    }

    public function userprofile(){
            $user= auth()->user();
         return new UserResource($user);

    }
    
}
