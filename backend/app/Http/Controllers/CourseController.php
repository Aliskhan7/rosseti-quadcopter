<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use App\Traits\DefaultCrud;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public string $model = Course::class;
    public string $controller = self::class;

    const PAGINATE = 12;

    use DefaultCrud;

    private Course $course;
    public function __construct(Course $course)
    {
        $this->course = $course;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $basic = $this->course::BASIC_TYPE;
        $additional = $this->course::ADDITIONAL_TYPE;

        return response()->json([
            'data' => [
                $basic => $this->course::where('type', $basic)->get(),
                $additional => $this->course::where('type', $additional)->get(),
            ],
        ]);
    }

    /**
     * @param Request $request
     * @param int $entity
     * @return JsonResponse
     */
    public function show(Request $request, int $entity): JsonResponse
    {
        $entity = $this->course->whereId($entity)->with('videos', 'user')->first();
        $user = $entity->user->first();

        return response()->json([
            'course' => $entity->only('name'),
            'videos' => $entity->videos,
            'completed_tasks' => $user->pivot->completed_tasks
        ]);
    }
}
