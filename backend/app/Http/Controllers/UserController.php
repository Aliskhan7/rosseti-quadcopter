<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public string $model = User::class;
    public string $controller = self::class;

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getProfile(Request $request): JsonResponse
    {
        $user = auth()->user();

        return response()->json([
            'data' => [
                'user' => $user,
                'courses' => $user->courses()->withPivot('completed_tasks')->get()
            ],
        ]);
    }
}
