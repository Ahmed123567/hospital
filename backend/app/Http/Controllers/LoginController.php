<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request) {
        
        if(!auth()->attempt($request->only("email", "password"))) {
            return $this->error_response("invalid credintials", 401);
        }

        return new UserResource(auth()->user());
    }

}
