<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Traits\DefaultCrud;

class QuizController extends Controller
{
    public string $model = Quiz::class;
    public string $controller = self::class;

    use DefaultCrud;
}
