<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function signIn(LoginRequest $request): JsonResponse
    {
        if (
            !Auth::attempt( $request->only('email', 'password') )
        ) {
            return response()->json([
                'message' => 'Credentials not match'
            ], 401);
        }

        $user = auth()->user();

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('token')->plainTextToken,
        ]);
    }

    public function signOut(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'data' => [
                'message' => 'Ok.'
            ],
        ]);
    }
}
