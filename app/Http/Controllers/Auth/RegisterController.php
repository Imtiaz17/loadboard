<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */


    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        if ($data['role'] == 'driver') {
            return Validator::make($data, [
                'first_name' => 'required',
                'last_name' => 'required',
                'username' => 'required|min:4|unique:users,username',
                'email' => 'required|email|unique:users',
                'phone' => 'required', 'number',
                'password' => 'min:6', 'confirmed',
                'role' => 'required',
                'driver_licence_id' => 'required'
                // 'g-recaptcha-response' => new Captcha(),
            ]);
        } else if ($data['role'] == 'shipper') {
            return Validator::make($data, [
                'first_name' => 'required',
                'last_name' => 'required',
                'username' => 'required|min:4|unique:users,username',
                'email' => 'required|email|unique:users',
                'phone' => 'required', 'number',
                'password' => 'min:6', 'confirmed',
                'role' => 'required',
                'organization' => 'required',
                'tax_id' => 'required',
                // 'g-recaptcha-response' => new Captcha(),
            ]);

        }

    }

    protected function create(array $data)
    {
        if ($data['role'] == 'driver') {
            $user = User::create([
                'first_name' => $data['first_name'],
                'middle_name' => $data['m_name'],
                'last_name' => $data['last_name'],
                'phone' => $data['phone'],
                'email' => $data['email'],
                'role' => $data['role'],
                'driver_licence_id' => $data['driver_licence_id'],
                'password' => bcrypt($data['password']),
                'verification_token' => md5(str_random(20)),
            ]);

        } else if ($data['role'] == 'shipper') {
            $user = User::create([
                'first_name' => $data['first_name'],
                'middle_name' => $data['m_name'],
                'last_name' => $data['last_name'],
                'username'=> $data['username'],
                'phone' => $data['phone'],
                'email' => $data['email'],
                'role' => $data['role'],
                'organization' => $data['organization'],
                'tax_id' => $data['tax_id'],
                'password' => bcrypt($data['password']),
                'verification_token' => md5(str_random(20)),
            ]);
        }


    }

    //Mail::to($data['email'])->send(new email($user));


}
